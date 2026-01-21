import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, AdaptiveDpr, Preload } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive';
import HeroLights from "./HeroLights";
import { Room } from './Room';
const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Canvas
      shadows={false}
      dpr={[1, 2]}
      gl={{
        antialias: false,
        powerPreference: "high-performance",
        alpha: true,
        stencil: false,
        depth: true
      }}
      camera={{ position: [0, 0, 15], fov: 45 }}
    >
      <Suspense fallback={null}>
        <AdaptiveDpr pixelated />
        {/* deep blue ambient */}
        <ambientLight intensity={0.2} color="#1a1a40" />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <OrbitControls
          enablePan={false}
          enableZoom={!isTablet}
          maxDistance={20}
          minDistance={5}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
          makeDefault
        />
        <HeroLights />
        <group
          scale={isMobile ? 0.7 : 1}
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Room />
        </group>
        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default HeroExperience