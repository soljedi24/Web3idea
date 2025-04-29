const ideas = [
  "Decentralized freelance platform",
  "NFT marketplace for African artists",
  "Web3-based crowdfunding for startups",
  "Blockchain voting app for local elections",
  "Play-to-earn educational games",
  "Tokenized farming co-ops",
  "Web3 ride-sharing app",
  "Decentralized charity donation tracker",
  "Crypto-based microloans for businesses",
  "Web3 fashion marketplace",
  "Blockchain-powered ticketing system",
  "Decentralized cloud storage app",
  "Music streaming platform on blockchain",
  "NFT ticketing for sports and events",
  "Smart contract for rental agreements",
  "Decentralized e-learning platform",
  "Blockchain loyalty programs for shops",
  "P2P car rental app using smart contracts",
  "NFT-based digital identity",
  "Real estate on-chain registry",
  "Web3 healthcare records manager",
  "Blockchain energy trading between homes",
  "Metaverse real estate marketplace",
  "DeFi insurance for farmers",
  "Web3-based food delivery app",
  "Blockchain-based credit score app",
  "DAO for community development",
  "NFT games for African mythology",
  "P2P lending on Solana",
  "Decentralized dating app",
  "Blockchain proof-of-workouts app",
  "Web3 podcast monetization platform",
  "Tokenized wildlife conservation app",
  "Blockchain-powered talent show voting",
  "AI-generated NFT art platform",
  "Decentralized freelance tutoring",
  "Web3 marketplace for homemade goods",
  "Blockchain-based election audit tool",
  "Crypto wallet with learning rewards",
  "Decentralized media distribution platform",
  "NFT sneakers marketplace",
  "Web3 fantasy sports betting platform",
  "Blockchain loyalty rewards for groceries",
  "Peer-to-peer real estate investment app",
  "Decentralized publishing for indie writers",
  "Blockchain-secured university diplomas",
  "NFT certification for courses",
  "P2P charity without intermediaries",
  "DAO investment clubs",
  "Web3 powered barter exchange"
];

const generateBtn = document.getElementById('generate-btn');
const ideaDisplay = document.getElementById('idea-display');

generateBtn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * ideas.length);
  const randomIdea = ideas[randomIndex];
  ideaDisplay.textContent = randomIdea;
});
