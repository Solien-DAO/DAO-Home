import React, { useState } from 'react';
import Image from 'next/image';
import GlowingButton from '../Buttons/GlowingButton/GlowingButton';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative flex flex-row items-center justify-between py-4 px-4 md:px-32 bg-b-blue text-white">
      <div className="flex items-center">
        <Image
          src="/icons/daologo.png"
          alt="Solien DAO Logo"
          width={50}
          height={50}
        />
        <span className="ml-2 font-bold">Solien DAO</span>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        {isOpen ? (
          <Image src="/icons/close.svg" alt="Close menu" width={24} height={24} />
        ) : (
          <Image src="/icons/burger.svg" alt="Open menu" width={24} height={24} />
        )}
      </div>

      {/* Menu Items */}
      <nav className={`absolute right-0 mt-2 w-full md:w-auto md:static bg-b-blue md:bg-transparent p-4 md:p-0 transition-all ease-in-out duration-300 ${isOpen ? 'block' : 'hidden'} md:flex items-center space-x-4 z-10`}>
        <a href="https://www.google.com" className="block text-white py-2 px-4 hover:bg-blue-700 md:bg-transparent md:text-white md:p-0">Home</a>
        <a href="https://www.google.com" className="block text-white py-2 px-4 hover:bg-blue-700 md:bg-transparent md:text-white md:p-0">Dashboard</a>
        <a href="https://www.google.com" className="block text-white py-2 px-4 hover:bg-blue-700 md:bg-transparent md:text-white md:p-0">DAC</a>
        <a href="https://www.google.com" className="block text-white py-2 px-4 hover:bg-blue-700 md:bg-transparent md:text-white md:p-0">Forum</a>
        <a href="https://www.google.com" className="block text-white py-2 px-4 hover:bg-blue-700 md:bg-transparent md:text-white md:p-0">Docs</a>
        <GlowingButton href="https://www.google.com">
          Vote
        </GlowingButton>
      </nav>
    </header>
  );
}
