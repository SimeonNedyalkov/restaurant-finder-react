import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="homeContainer">
      <h1 className="title">Welcome to Restaurant Finder</h1>
      <p className="subtitle">Discover the best restaurants near you with just a few clicks.</p>
      <p className="description">
        Our app helps you find a variety of dining options, whether you're looking for a quick bite or a fine dining experience.
      </p>
      <Link to="/restaurant-finder">
        <button className="button">Find Restaurants</button>
      </Link>
    </div>
  );
};

export default Home;
