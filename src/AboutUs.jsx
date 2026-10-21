
import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <section className="about-hero">
        <div className="about-content">
          <h1>About Paradise Nursery 🌿</h1>
          <p className="about-tagline">
            Bringing Nature Home, One Plant at a Time
          </p>
          <p>
            Welcome to Paradise Nursery, your destination for beautiful
            houseplants and a greener lifestyle. We believe that plants
            make every space more peaceful, refreshing, and beautiful.
            Our goal is to help everyone experience the joy of bringing
            nature into their homes and workplaces.
          </p>
        </div>
      </section>

      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          Paradise Nursery is an online plant shopping platform created
          for plant lovers, beginners, and gardening enthusiasts. We
          offer a variety of indoor plants, including decorative,
          aromatic, and medicinal plants, to suit different spaces and
          lifestyles.
        </p>
        <p>
          Our shopping experience makes it easy to explore plants, learn
          about their benefits, and select your favorites. With a simple
          shopping cart, customers can add plants, manage quantities,
          and calculate their total cost conveniently.
        </p>
      </section>

      <section className="about-cards">
        <div className="about-card">
          <span className="about-icon">🌱</span>
          <h3>Our Mission</h3>
          <p>
            To make indoor gardening accessible to everyone by offering
            a convenient and enjoyable way to discover houseplants.
          </p>
        </div>

        <div className="about-card">
          <span className="about-icon">🌍</span>
          <h3>Our Vision</h3>
          <p>
            To inspire greener homes and communities where people
            appreciate nature and make plants part of everyday life.
          </p>
        </div>

        <div className="about-card">
          <span className="about-icon">💚</span>
          <h3>Our Values</h3>
          <p>
            We value nature, simplicity, customer satisfaction, and
            helping plant lovers create beautiful green spaces.
          </p>
        </div>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Paradise Nursery?</h2>
        <ul>
          <li>🌿 A variety of indoor plants for every space</li>
          <li>🪴 Easy-to-browse plant categories</li>
          <li>🛒 Simple and convenient shopping cart</li>
          <li>💰 Clear pricing and automatic total calculation</li>
          <li>🏡 Inspiration for a greener and more beautiful home</li>
        </ul>
      </section>

      <section className="about-footer">
        <h2>Let's Make the World Greener!</h2>
        <p>
          Every plant brings a little more life into your space.
          Start your plant journey with Paradise Nursery today.
        </p>
        <a href="/products" className="explore-button">
          Explore Our Plants
        </a>
      </section>
    </div>
  );
};

export default AboutUs;
