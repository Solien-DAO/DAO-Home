import React from 'react';
import { Twitter, Chat, Forum, MailOutline } from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <footer className="bg-b-blue text-white p-4 px-32 flex flex-col items-center justify-between md:flex-row">
      <div className="flex flex-col items-center md:items-start">
        <span className="text-xl font-semibold">Solien DAO</span>
        <span className="text-sm">Powered by Solana</span>
        <span className="text-xs">&copy; 2021 Solien DAO</span>
      </div>
      <div className="flex space-x-4 mt-4 md:mt-0">
        <a href="https://https://twitter.com/SolienDAO" className="text-white" aria-label="Twitter">
          <Twitter />
        </a>
        <a href="https://google.com" className="text-white" aria-label="Chat">
          <Chat />
        </a>
        <a href="https://google.com" className="text-white" aria-label="Forum">
          <Forum />
        </a>
        <a href="https://google.com" className="text-white" aria-label="Mail">
          <MailOutline />
        </a>
      </div>
    </footer>
  );
};

export default Footer;