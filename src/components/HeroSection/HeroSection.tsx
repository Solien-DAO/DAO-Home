// HeroSection.tsx
import React, { useRef } from 'react';
import Image from 'next/image';
import TypingAnimation from '../TypingAnimation/TypingAnimation'; // Ensure TypingAnimation is correctly imported
import { Canvas, useThree, useFrame, extend } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

const StarGlobe = () => {
  const starsRef = useRef();
  const { camera } = useThree();

  camera.position.set(0, 2.94, 500);

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group>
      <OrbitControls enableZoom={false} />
      <Stars ref={starsRef} />
    </group>
  );
};

const HeroSection = () => {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-black p-4 md:p-8">
      <div className="text-center flex flex-col justify-center items-center pb-8 mt-4 md:pb-8 md:mt-8">
        <h1 className='text-white text-2xl font-bold md:text-3xl'>
          Those who create value deserve&nbsp;
        </h1>
        <TypingAnimation />
      </div>
      {/* Canvas container */}
      <div className="flex-grow flex justify-center items-center">
        <Canvas className="w-full max-w-xs h-auto aspect-square md:max-w-md">
          <ambientLight intensity={0.5} />
          <StarGlobe />
        </Canvas>
      </div>
      {/* Additional content */}
      <div className="flex mx-auto items-center justify-center flex-wrap gap-2 p-4">
        <div className="flex py-2">
          <span className="text-slate-400 font-bold text-xs md:text-sm">
            POWERED BY&nbsp;
          </span>
          <div className="inline-block w-[100px] h-[15px] md:w-[150px] md:h-[22.5px] relative">
            <Image
              layout="fill"
              objectFit="contain"
              alt='Solana Logo'
              src="/icons/solanaLogo.png"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
