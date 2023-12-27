import Image from 'next/image';
import GlowingButton from '../Buttons/GlowingButton/GlowingButton';

export default function Navbar() {
    return (
      <header className="flex items-center justify-between py-4 px-32 bg-b-blue text-white">
        <div className="flex items-center ">
          <Image
            src="/icons/daologo.png"
            alt="Solien DAO Logo"
            width={50}
            height={50}
          />
          <span className="ml-2 font-bold">Solien DAO</span>
        </div>
  
        <nav className="flex items-center space-x-4">
          {/* Update href attributes to point to google.com */}
          <a href="https://www.google.com" className="text-white h-full nav-bar-selected">Home</a>
          <a href="https://www.google.com" className="text-white nav-bar-hover">Dashboard</a>
          <a href="https://www.google.com" className="text-white nav-bar-hover">DAC</a>
          <a href="https://www.google.com" className="text-white">Forum</a>
          <a href="https://www.google.com" className="text-white">Docs</a>
          <GlowingButton 
            href="https://www.google.com" 
            // className="rounded-lg bg-white text-black px-4 py-2 transition-colors hover:bg-gray-200"
            // target="_blank" // Optional: Opens the link in a new tab
            // rel="noopener noreferrer" // Security feature for opening links in a new tab
          >
            Vote
          </GlowingButton>
        </nav>
      </header>
    );
  }
  