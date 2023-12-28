import React from 'react';
import Card from './/components/Card'; // Make sure this path is correct

const IntroSection: React.FC = () => {
  // Your placeholder data for the cards, ensure there are six entries
  const cards = [
    {
      iconPath: '/icons/daologo.png', // Replace with your actual icon paths
      title: 'NFT Access',
      text: 'Connecting members social accounts to unique cryptographic keys...',
    },
    // ... Repeat for the second card
    {
      iconPath: '/icons/daologo.png', // Replace with your actual icon paths
      title: 'Multi-Coin Configurations',
      text: 'Our Dynamic Balance-Based Membership supports all Solana tokens...',
    },
    // ... Repeat for the third card
    {
      iconPath: '/icons/daologo.png', // Replace with your actual icon paths
      title: 'Community Driven DAO',
      text: 'A Decentralized Autonomous Organization is the perfect structure for revenue generating groups...',
    },
    // ... Add three more card data objects for the second row
    {
      iconPath: '/icons/daologo.png',
      title: 'Feature Four',
      text: 'Description for feature four...',
    },
    {
      iconPath: '/icons/daologo.png',
      title: 'Feature Five',
      text: 'Description for feature five...',
    },
    {
      iconPath: '/icons/daologo.png',
      title: 'Feature Six',
      text: 'Description for feature six...',
    },
  ];

  return (
    <section className="px-4 sm:px-12 md:px-32 py-12 bg-gradient-to-br from-blue-800 to-black">
      <h2 className="text-center text-white text-2xl sm:text-3xl font-bold mb-8">Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
};


export default IntroSection;
