import Image from 'next/image';
import React from 'react';

type CardProps = {
  iconPath: string;
  title: string;
  text: string;
};

const Card: React.FC<CardProps> = ({ iconPath, title, text }) => {
  return (
    <div className="animated-background text-white p-4 rounded-lg shadow-md">
      <Image src={iconPath} alt={title} width={50} height={50} layout="fixed" />
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Card;
