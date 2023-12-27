import React from 'react';

export type GlowingButtonProps = {
  children: React.ReactNode;
  href: string;
};

const GlowingButton: React.FC<GlowingButtonProps> = ({ children, href }) => {
  return (
    <a href={href} className="inline-block px-4 py-2 bg-yellow-1 text-black rounded-lg text-lg font-medium hover:bg-yellow-2 animate-glow-slow">
      {children}
    </a>
  );
};

export default GlowingButton;
