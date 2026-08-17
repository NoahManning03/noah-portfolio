import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useIsMobile } from "../../hooks/useMediaQuery";
import NeuralParticles from "./NeuralParticles";

function FallbackLoader() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-0 bg-[#0b0f17]"
      aria-hidden
    />
  );
}

export default function BackgroundCanvas() {
  const isMobile = useIsMobile();
  const count = isMobile ? 800 : 2800;
  const linkCount = isMobile ? 36 : 110;

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <Canvas
        dpr={isMobile ? 1 : [1, 2]}
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
        }}
        fallback={<FallbackLoader />}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <Suspense fallback={null}>
          <NeuralParticles count={count} linkCount={linkCount} />
        </Suspense>
      </Canvas>
    </div>
  );
}
