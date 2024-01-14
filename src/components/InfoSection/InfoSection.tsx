import React, { useState } from 'react';

interface TabProps {
  id: string;
  activeTab: string;
  setActiveTab: (id: string) => void;
  children: React.ReactNode;
}

const Tab: React.FC<TabProps> = ({ id, activeTab, setActiveTab, children }) => {
  return (
    <button
      className={`tab-button ${activeTab === id ? 'active' : ''}`}
      onClick={() => setActiveTab(id)}
    >
      {children}
    </button>
  );
};

interface TabContentProps {
  id: string;
  activeTab: string;
  children: React.ReactNode;
}

const TabContent: React.FC<TabContentProps> = ({ id, activeTab, children }) => {
  return activeTab === id ? <div className="my-auto">{children}</div> : null;
};

const InfoSection = () => {
  const [activeTab, setActiveTab] = useState<string>('first-nft-dao');

  return (
    <section className="dao-section animated-background-2 mx-auto px-4 sm:px-12 md:px-32 h-fit py-12">
      <div className="container flex">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-4 ">What is Solien DAO?</h2>
            <div className="flex flex-row">
              <div className="w-1/3">
                <div className="tabs flex font-bold flex-col">
                  <Tab id="first-nft-dao" activeTab={activeTab} setActiveTab={setActiveTab}>First NFT DAO on Solana</Tab>
                  <Tab id="community-operated" activeTab={activeTab} setActiveTab={setActiveTab}>100% Community Operated</Tab>
                  <Tab id="alien-artwork" activeTab={activeTab} setActiveTab={setActiveTab}>Alien-Themed Artwork</Tab>
                 <Tab id="play-to-earn" activeTab={activeTab} setActiveTab={setActiveTab}>Play-To-Earn Specialists</Tab>
                  <Tab id="defi-enthusiasts" activeTab={activeTab} setActiveTab={setActiveTab}>DeFi Enthusiasts</Tab>
                 <Tab id="governance" activeTab={activeTab} setActiveTab={setActiveTab}>Governance Maximalists</Tab>
                </div>
            </div>
            <div className="content-area w-2/3 custom-art-bg p-4 ">
          <div className="card bg-grey-low-opacity p-6 rounded-lg shadow-md my-auto">
            <TabContent id="first-nft-dao" activeTab={activeTab}>
                <p className="text-lg font-bold pb-4 text-black">
                    Solien DAO launched on August 26, 2021.
                  </p>
                  <p className="text-lg text-black">
                  We started our governance system by using simple discord polls to determine our first investments in Star Atlas, and have since been one of the first organizations to make use of tooling such as Squads, Tribeca, and more. We pushed the boundaries of what a DAO is, taking it beyond a simple groupchat with no governance structure or ethos.
                  </p>
            </TabContent>
            <TabContent id="community-operated" activeTab={activeTab}>
              <p className="text-lg text-black">
                Since we launched, every decision made by the DAO has been made by the members. There is no central team which oversees development, marketing, or any other functions. We are a global collective that is not bound by traditional borders, instead we are bound together by code and trust.
              </p>
            </TabContent>
            <TabContent id="alien-artwork" activeTab={activeTab}>
              <p className="text-lg text-black">
                Our artwork is currently going through a major upgrade with new traits suggested by DAO members, giving the collection a fresh feel. We are keeping the original extraterrestrial theme while updating traits and art style to be more sci-fi themed.
              </p>
            </TabContent>
            <TabContent id="play-to-earn" activeTab={activeTab}>
              <p className="text-lg text-black">
                Our DAO specializes in leveraging play-to-earn assets by making use of the human and financial capital at our disposal. Our $25k investment in Photo Finish paid for itself via revenue earned from users interested in breeding with our top horses and has since grown by many multiples. We are one of the largest wallets in Star Atlas by assets, and we have been putting our resources to work by providing exclusive ship access to DAO members, and other benefits from the top in-game assets we own and operate.
              </p>
            </TabContent>
            <TabContent id="defi-enthusiasts" activeTab={activeTab}>
              <p className="text-lg text-black">
                We believe a smart contract platform is a lego sandbox with all sorts of pieces that can be put together in different permutations in order to create substantial benefits on our capital efficiency and activation of dormant capital. All of our operations in DeFi are run by DAO members who earn commission for the assets they manage.
                Currently we are participating heavily across LIFINITY, MarginFi, Kamino, Banx, sharkyFi, and more!
              </p>
            </TabContent>
            <TabContent id="governance" activeTab={activeTab}>
              <p className="text-lg text-black">
                We are governance maximalists, meaning we love going through the process of meticulously crafting proposals, discussing them, and determining what the best use of our resources are. We are truly trying to build one of the purest DAOs on Solana, if that sounds like something you are interested in - join today!
              </p>
            </TabContent>
          </div>
        </div>
            </div>
        </div>
        
        
      </div>
    </section>
  );
};

export default InfoSection;
