import React, { useRef } from 'react';
import { OrbitControls, Stars } from '@react-three/drei';
import Image from 'next/image';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import TypingAnimation from '../components/TypingAnimation/TypingAnimation'; // Make sure to create this component
import IntroSection from '../mvvm/views/Home/IntroSection';
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber';
import * as THREE from 'three';

const StarGlobe = () => {
  const starsRef = useRef<any>(null); // Using 'any' as a workaround
  const orbitControlsRef = useRef(null);
  const { camera } = useThree();

  camera.position.set(0, 2.94, 500);

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group>
      <OrbitControls enableZoom={false} ref={orbitControlsRef} />
      <pointLight position={[0, 0, 0]} />
      <Stars ref={starsRef} />  
    </group>
  );
};

const Home = () => {
  return (
    <div className="relative w-full special bg-black text-white">
      <div className='h-screen'>
      <Navbar />
      <main className="flex flex-col items-center justify-between h-fit pt-12"> {/* Removed 'justify-center' */}
        {/* Hero section with Typing Animation */}
        <div className="text-center flex flex-col justify-center items-center pb-8 mt-4 md:pb-16 md:mt-8">
          <h1 className='text-white text-2xl font-bold md:text-3xl'>
            Those who create value deserve&nbsp;
          </h1>
          <TypingAnimation />
        </div>
        {/* Canvas container */}
        <div className="flex-grow flex justify-center items-center center-glow p-4">
          <Canvas className="w-full max-w-xs h-auto aspect-square md:max-w-md">
            <StarGlobe />
          </Canvas>
        </div>
        {/* Additional content */}
        <div className="flex mx-auto items-center justify-center flex-wrap gap-2 p-4">
          <div className="flex py-2">
            <span className="text-slate-400 font-bold text-xs md:text-sm">
              POWERED BY&nbsp;
            </span>
            <Image
              layout="intrinsic"
              width={100}
              height={15}
              alt=''
              src="/icons/solanaLogo.png"
            />
          </div>
        </div>
      </main>
      </div>
      <IntroSection />
      <Footer />
    </div>
  );
};

export default Home;
