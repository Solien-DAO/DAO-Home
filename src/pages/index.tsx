import React, { useEffect, useRef, useState } from 'react';
import { OrbitControls, Stars } from '@react-three/drei';
import Image from 'next/image';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import TypingAnimation from '../components/TypingAnimation/TypingAnimation'; // Make sure to create this component
import GetInvolved from '../mvvm/views/Home/GetInvolved';
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber';
import * as THREE from 'three';
import InfoSection from '../components/InfoSection/InfoSection';

const StarGlobe = () => {
  // Adjust the type for starsRef to match the expected type of the Stars component
  const starsRef = useRef<THREE.Points>(null);
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
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getOpacity = () => {
    const maxScrollY = 550; // Adjust this value as needed
    return Math.min(scrollY / maxScrollY, 1);
  };

  return (
    <div className="relative w-full special bg-black text-white">
      <div className='h-screen'>
        <Navbar />
        <main className="flex flex-col items-center justify-between h-fit pt-12">
          <div className="text-center flex flex-col justify-center items-center pb-8 mt-4 md:pb-8 md:mt-8">
            <h1 className='text-white text-2xl font-bold md:text-3xl'>
              Those who create value deserve&nbsp;
            </h1>
            <TypingAnimation />
          </div>
          <div className="flex-grow flex justify-center items-center center-glow ">
            <Canvas className="w-full max-w-xs h-auto aspect-square beacon md:max-w-md">
              <StarGlobe />
            </Canvas>
          </div>
          <div className="flex mx-auto items-center justify-center flex-wrap gap-2 p-4">
          <div className="flex py-2">
            <span className="text-slate-400 font-bold text-xs md:text-sm">
              POWERED BY&nbsp;
            </span>
            <Image
              layout="intrinsic"
              width={110}
              height={15}
              alt=''
              src="/icons/solanaLogo.png"
            />
          </div>
          </div>
        </main>
      </div>
      {/* Dynamic opacity based on scroll position */}
      <div style={{ opacity: getOpacity() }}>
        <InfoSection />
      </div>
      <GetInvolved />
      <Footer />
    </div>
  );
};

export default Home;


