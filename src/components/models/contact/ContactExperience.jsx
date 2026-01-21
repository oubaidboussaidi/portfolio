import React, { Suspense } from "react";
import { OrbitControls, AdaptiveDpr, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Computer from "./Computer";

const ContactExperience = () => {
  return (
    <Canvas
      shadows={false}
      dpr={[1, 2]}
      gl={{
        antialias: false,
        powerPreference: "high-performance",
        alpha: true
      }}
      camera={{ position: [0, 3, 7], fov: 45 }}
    >
      <Suspense fallback={null}>
        <AdaptiveDpr pixelated />
        <ambientLight intensity={0.5} color="#fff4e6" />

        <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffd9b3" />

        <directionalLight
          position={[5, 9, 1]}
          intensity={2.5}
          color="#ffd9b3"
        />

        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
          makeDefault
        />

        <group scale={[1, 1, 1]}>
          <mesh
            position={[0, -1.5, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <planeGeometry args={[30, 30]} />
            <meshStandardMaterial color="#a46b2d" />
          </mesh>
        </group>

        <group scale={0.03} position={[0, -1.49, -2]}>
          <Computer />
        </group>
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ContactExperience;
