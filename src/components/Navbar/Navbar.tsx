import React, { useState } from 'react';
import Image from 'next/image';
import GlowingButton from '../Buttons/GlowingButton/GlowingButton';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative flex items-center justify-between px-4 md:px-32 animated-background-2 text-white h-16 md:h-20">
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
      <div className="md:hidden cursor-pointer z-20" onClick={toggleMenu}>
        {isOpen ? (
          <Image src="/icons/close.svg" alt="Close menu" width={24} height={24} />
        ) : (
          <Image src="/icons/burger.svg" alt="Open menu" width={24} height={24} />
        )}
      </div>

      {/* Menu Items */}
      <nav className={`absolute top-full right-0 md:top-auto bg-b-blue transition-all ease-in-out py-4 duration-300 ${isOpen ? 'block' : 'hidden'} md:flex md:flex-row md:space-x-4 md:items-center md:static md:bg-transparent md:z-auto z-10`}>
        <a href="https://www.google.com" className="block text-white py-2 px-4 hover:bg-blue-700 md:hover:bg-transparent md:text-white md:p-0">Dashboard</a>
        <a href="https://www.google.com" className="block text-white py-2 px-4 hover:bg-blue-700 md:hover:bg-transparent md:text-white md:p-0">DAC</a>
        <a href="https://www.google.com" className="block text-white py-2 px-4 hover:bg-blue-700 md:hover:bg-transparent md:text-white md:p-0">Forum</a>
        <a href="https://solien-dao.gitbook.io/" className="block text-white py-2 px-4 hover:bg-blue-700 md:hover:bg-transparent md:text-white md:p-0">Docs</a>
        <GlowingButton href="https://www.tribeca.so/gov/sdust">
          Vote
        </GlowingButton>
      </nav>
    </header>
  );
}
