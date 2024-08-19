import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Welcome to Restaurant Finder</h1>
      <p>Discover the best restaurants near you with just a few clicks.</p>
      <p>Our app helps you find a variety of dining options, whether you're looking for a quick bite or a fine dining experience.</p>
      <Link to="/restaurant-finder">
        <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>Find Restaurants</button>
      </Link>
    </div>
  );
};

export default Home;