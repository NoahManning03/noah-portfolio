import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMousePosition } from "../../hooks/useMousePosition";
import { particleFragment, particleVertex } from "./Shaders";

const BOUNDS = 9;
const LINK_DISTANCE = 2.5;

function mulberry32(seed) {
  let t = seed;
  return () => {
    t += 0x6d2b79f5;
    let r = t;
    r = Math.imul(r ^ (r >>> 15), r | 1);
    r ^= r + Math.imul(r ^ (r >>> 7), r | 61);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function readScrollProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  if (max <= 0) return 0;
  return THREE.MathUtils.clamp(window.scrollY / max, 0, 1);
}

function createSystem(count, linkCount) {
  const rand = mulberry32(count * 997 + linkCount * 131);
  const positions = new Float32Array(count * 3);
  const scales = new Float32Array(count);
  const velocities = new Float32Array(count * 3);

  for (let i = 0; i < count; i += 1) {
    const i3 = i * 3;
    positions[i3] = (rand() - 0.5) * BOUNDS * 2;
    positions[i3 + 1] = (rand() - 0.5) * BOUNDS * 1.4;
    positions[i3 + 2] = (rand() - 0.5) * BOUNDS * 2;
    scales[i] = 0.55 + rand() * 1.35;
    velocities[i3] = (rand() - 0.5) * 0.008;
    velocities[i3 + 1] = (rand() - 0.5) * 0.006;
    velocities[i3 + 2] = (rand() - 0.5) * 0.008;
  }

  const maxLinks = linkCount * 6;
  const linkPositions = new Float32Array(maxLinks * 2 * 3);
  const linkIndex = new Uint16Array(linkCount);
  for (let i = 0; i < linkCount; i += 1) {
    linkIndex[i] = Math.floor((i / linkCount) * count);
  }

  const pointsGeometry = new THREE.BufferGeometry();
  pointsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  pointsGeometry.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));

  const linesGeometry = new THREE.BufferGeometry();
  linesGeometry.setAttribute("position", new THREE.BufferAttribute(linkPositions, 3));
  linesGeometry.setDrawRange(0, 0);

  const pointsMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uSize: { value: 1.6 },
      uSpread: { value: 1 },
      uColor: { value: new THREE.Color("#2f81f7") },
      uColorAlt: { value: new THREE.Color("#a855f7") },
    },
    vertexShader: particleVertex,
    fragmentShader: particleFragment,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

  return {
    count,
    positions,
    velocities,
    linkPositions,
    linkIndex,
    pointsGeometry,
    linesGeometry,
    pointsMaterial,
    maxLinks,
  };
}

export default function NeuralParticles({ count = 2500, linkCount = 90 }) {
  const linesRef = useRef(null);
  const mouse = useMousePosition();
  const frame = useRef(0);
  const system = useMemo(() => createSystem(count, linkCount), [count, linkCount]);
  const systemRef = useRef(system);

  useEffect(() => {
    systemRef.current = system;
  }, [system]);

  useFrame((state) => {
    const {
      count: particleCount,
      positions,
      velocities,
      linkPositions,
      linkIndex,
      pointsGeometry,
      linesGeometry,
      pointsMaterial,
      maxLinks,
    } = systemRef.current;

    const { camera } = state;
    const t = state.clock.elapsedTime;
    frame.current += 1;

    for (let i = 0; i < particleCount; i += 1) {
      const i3 = i * 3;
      positions[i3] += velocities[i3] + Math.sin(t * 0.45 + i * 0.13) * 0.0035;
      positions[i3 + 1] += velocities[i3 + 1] + Math.cos(t * 0.38 + i * 0.1) * 0.003;
      positions[i3 + 2] += velocities[i3 + 2] + Math.sin(t * 0.3 + i * 0.08) * 0.0028;

      if (positions[i3] > BOUNDS || positions[i3] < -BOUNDS) velocities[i3] *= -1;
      if (positions[i3 + 1] > BOUNDS * 0.8 || positions[i3 + 1] < -BOUNDS * 0.8) {
        velocities[i3 + 1] *= -1;
      }
      if (positions[i3 + 2] > BOUNDS || positions[i3 + 2] < -BOUNDS) {
        velocities[i3 + 2] *= -1;
      }
    }
    pointsGeometry.attributes.position.needsUpdate = true;

    const progress = readScrollProgress();
    pointsMaterial.uniforms.uTime.value = t;
    pointsMaterial.uniforms.uSpread.value = 1 + progress * 1.35;

    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      mouse.current.x * 1.5,
      0.05
    );
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      mouse.current.y * 1.5,
      0.05
    );
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, 8 + progress * 5, 0.05);
    camera.lookAt(0, 0, 0);

    if (frame.current % 3 !== 0 || !linesRef.current) return;

    let cursor = 0;
    for (let a = 0; a < linkIndex.length; a += 1) {
      const ia = linkIndex[a] * 3;
      for (let b = a + 1; b < linkIndex.length; b += 1) {
        const ib = linkIndex[b] * 3;
        const dx = positions[ia] - positions[ib];
        const dy = positions[ia + 1] - positions[ib + 1];
        const dz = positions[ia + 2] - positions[ib + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < LINK_DISTANCE && cursor < maxLinks) {
          const o = cursor * 6;
          linkPositions[o] = positions[ia];
          linkPositions[o + 1] = positions[ia + 1];
          linkPositions[o + 2] = positions[ia + 2];
          linkPositions[o + 3] = positions[ib];
          linkPositions[o + 4] = positions[ib + 1];
          linkPositions[o + 5] = positions[ib + 2];
          cursor += 1;
        }
      }
    }

    linesGeometry.attributes.position.needsUpdate = true;
    linesGeometry.setDrawRange(0, cursor * 2);
    linesRef.current.material.opacity = THREE.MathUtils.lerp(0.22, 0.08, progress);
  });

  return (
    <group>
      <points geometry={system.pointsGeometry} material={system.pointsMaterial} />
      <lineSegments ref={linesRef} geometry={system.linesGeometry} frustumCulled={false}>
        <lineBasicMaterial
          color="#2f81f7"
          transparent
          opacity={0.18}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}
