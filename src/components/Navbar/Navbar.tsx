import { useState } from 'react';
import Image from 'next/image';
import GlowingButton from '../Buttons/GlowingButton/GlowingButton';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex items-center justify-between py-2 px-4 md:px-8 lg:px-32 bg-b-blue text-white">
      <div className="flex items-center">
        <Image
          src="/icons/daologo.png"
          alt="Solien DAO Logo"
          width={50}
          height={50}
        />
        <span className="ml-2 text-lg md:text-xl font-bold">Solien DAO</span>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden" onClick={toggleMenu}>
        <span className="material-icons">
          {isOpen ? 'close' : 'menu'}
        </span>
      </div>

      {/* Menu Items */}
      <nav className={`absolute md:relative left-0 w-full md:w-auto bg-b-blue md:bg-transparent p-4 md:p-0 transition-all ease-in-out duration-300 ${isOpen ? 'block' : 'hidden'} md:flex items-center space-x-4`}>
        <a href="https://www.google.com" className="text-white block md:inline h-full nav-bar-selected">Home</a>
        <a href="https://www.google.com" className="text-white block md:inline nav-bar-hover">Dashboard</a>
        <a href="https://www.google.com" className="text-white block md:inline nav-bar-hover">DAC</a>
        <a href="https://www.google.com" className="text-white block md:inline">Forum</a>
        <a href="https://www.google.com" className="text-white block md:inline">Docs</a>
        <GlowingButton href="https://www.google.com">
          Vote
        </GlowingButton>
      </nav>
    </header>
  );
}
