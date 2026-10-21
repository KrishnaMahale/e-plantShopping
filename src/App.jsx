
import React from "react";
import "./App.css";

function App() {
  const handleGetStarted = () => {
    window.location.href = "/products";
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>

        <h2>Welcome to Paradise Nursery!</h2>

        <p>
          Discover the beauty of nature with our wonderful collection
          of houseplants. From decorative indoor plants to aromatic
          and medicinal plants, find the perfect green companion
          for your home or office.
        </p>

        <p>
          Bring freshness, beauty, and a touch of nature into your
          everyday life. Start your plant journey with us today!
        </p>

        <button
          className="get-started-btn"
          onClick={handleGetStarted}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
