import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import FloatingCyberMesh from "./FloatingCyberMesh";

export default function HeroCanvas({ isTouch }) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 6.4], fov: 36 }}
      style={{ width: "100%", height: "100%", overflow: "visible" }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
    >
      <ambientLight intensity={0.45} />
      <pointLight position={[4, 4, 4]} intensity={1.35} color="#2f81f7" />
      <pointLight position={[-3, -2, 2]} intensity={0.85} color="#a855f7" />
      <Suspense fallback={null}>
        <FloatingCyberMesh isTouch={isTouch} />
      </Suspense>
    </Canvas>
  );
}
