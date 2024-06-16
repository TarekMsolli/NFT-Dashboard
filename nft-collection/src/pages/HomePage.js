import React from 'react';
import './HomePage.css';
import NFTCard from '../components/NFTCard';

const HomePage = () => {
  const nftData = {
    profileImage: 'https://bostonconservatory.berklee.edu/sites/default/files/d7/bcb/faculty_bio/headshot_chang-lynn01_460x660.jpg?fv=eYqjElu2',
    displayName: 'Lynn Chang',
    username: '@lynnchang_115',
    isVerified: true,
    nftImage: 'https://img.freepik.com/premium-photo/3d-kawaii-design-character-adorable-cute-illustration_784625-1468.jpg',
    rating: 8.5,
    bookmarks: 120,
    price: 0.75,
  };

  return (
    <div className="homepage-wrapper">
      <h1>Recent Collections</h1>
      <div className="recent-collection">
        <NFTCard {...nftData} />
        <NFTCard {...nftData} />
        <NFTCard {...nftData} />
        <NFTCard {...nftData} />
      </div>
    </div>
  );
};

export default HomePage;
