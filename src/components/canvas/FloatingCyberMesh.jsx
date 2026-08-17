import { useEffect, useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { hologramFragment, hologramVertex } from "./Shaders";

function SatelliteRing({ hovered, count = 16 }) {
  const group = useRef();
  const positions = useMemo(() => {
    const pts = [];
    for (let i = 0; i < count; i += 1) {
      const angle = (i / count) * Math.PI * 2;
      pts.push(
        new THREE.Vector3(
          Math.cos(angle) * 2.15,
          Math.sin(angle * 2) * 0.18,
          Math.sin(angle) * 2.15
        )
      );
    }
    return pts;
  }, [count]);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * (hovered ? 0.7 : 0.28);
      group.current.rotation.x = Math.sin(performance.now() * 0.0004) * 0.18;
    }
  });

  return (
    <group ref={group}>
      {positions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.045, 8, 8]} />
          <meshBasicMaterial
            color={hovered ? "#a855f7" : "#2f81f7"}
            transparent
            opacity={0.9}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function FloatingCyberMesh({ isTouch = false }) {
  const group = useRef();
  const scaleRef = useRef(1);
  const hoverRef = useRef(0);
  const [hovered, setHovered] = useState(false);

  const hologramMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uHover: { value: 0 },
          uColor: { value: new THREE.Color("#2f81f7") },
          uColorHover: { value: new THREE.Color("#a855f7") },
        },
        vertexShader: hologramVertex,
        fragmentShader: hologramFragment,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
      }),
    []
  );
  const materialRef = useRef(hologramMaterial);

  useEffect(() => {
    materialRef.current = hologramMaterial;
  }, [hologramMaterial]);

  useFrame((state, delta) => {
    const targetScale = hovered ? 1.06 : 0.9;
    scaleRef.current = THREE.MathUtils.lerp(scaleRef.current, targetScale, 0.08);
    hoverRef.current = THREE.MathUtils.lerp(hoverRef.current, hovered ? 1 : 0, 0.08);

    if (group.current) {
      group.current.scale.setScalar(scaleRef.current);
      group.current.rotation.y += delta * 0.2;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.14;
    }

    const material = materialRef.current;
    material.uniforms.uTime.value = state.clock.elapsedTime;
    material.uniforms.uHover.value = hoverRef.current;
  });

  return (
    <Float speed={2.2} rotationIntensity={0.35} floatIntensity={0.7}>
      <group
        ref={group}
        onPointerOver={() => {
          if (!isTouch) setHovered(true);
        }}
        onPointerOut={() => setHovered(false)}
      >
        <mesh>
          <icosahedronGeometry args={[1.28, 6]} />
          <MeshDistortMaterial
            color={hovered ? "#a855f7" : "#2f81f7"}
            distort={0.45}
            speed={2.4}
            roughness={0.16}
            metalness={0.78}
            transparent
            opacity={0.9}
            emissive={hovered ? "#a855f7" : "#2f81f7"}
            emissiveIntensity={0.45}
          />
        </mesh>

        <mesh>
          <icosahedronGeometry args={[1.56, 1]} />
          <meshBasicMaterial
            color={hovered ? "#c084fc" : "#58a6ff"}
            wireframe
            transparent
            opacity={0.48}
          />
        </mesh>

        <mesh material={hologramMaterial}>
          <sphereGeometry args={[1.68, 32, 32]} />
        </mesh>

        <SatelliteRing hovered={hovered} />

        <mesh rotation={[Math.PI / 2.4, 0, 0]}>
          <torusGeometry args={[1.95, 0.008, 8, 90]} />
          <meshBasicMaterial
            color={hovered ? "#a855f7" : "#2f81f7"}
            transparent
            opacity={0.5}
          />
        </mesh>
        <mesh rotation={[Math.PI / 1.7, 0.4, 0.2]}>
          <torusGeometry args={[2.15, 0.005, 8, 80]} />
          <meshBasicMaterial color="#a855f7" transparent opacity={0.28} />
        </mesh>
      </group>
    </Float>
  );
}
