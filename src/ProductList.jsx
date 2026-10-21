
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  selectCartItems,
  selectCartQuantity,
} from "../features/cart/CartSlice";
import "./ProductList.css";

// Plant catalog: 3 categories, 6 plants per category
const plantCategories = [
  {
    name: "Air Purifying Plants",
    description: "Freshen up your living space with beautiful greenery.",
    plants: [
      {
        id: 1,
        name: "Snake Plant",
        price: 299,
        image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b5a?auto=format&fit=crop&w=600&q=80",
        description: "A hardy, low-maintenance indoor plant.",
      },
      {
        id: 2,
        name: "Peace Lily",
        price: 349,
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
        description: "Elegant green leaves with beautiful white blooms.",
      },
      {
        id: 3,
        name: "Spider Plant",
        price: 249,
        image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=600&q=80",
        description: "A cheerful plant with arching striped leaves.",
      },
      {
        id: 4,
        name: "Areca Palm",
        price: 499,
        image: "https://images.unsplash.com/photo-1597055181300-a8b4be6c9b2d?auto=format&fit=crop&w=600&q=80",
        description: "A tropical palm that adds a lush feel indoors.",
      },
      {
        id: 5,
        name: "Rubber Plant",
        price: 399,
        image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
        description: "Glossy foliage that makes a bold statement.",
      },
      {
        id: 6,
        name: "Dracaena",
        price: 449,
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80",
        description: "An attractive plant with striking foliage.",
      },
    ],
  },
  {
    name: "Aromatic Plants",
    description: "Bring refreshing scents and greenery into your home.",
    plants: [
      {
        id: 7,
        name: "Lavender",
        price: 199,
        image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=600&q=80",
        description: "A fragrant plant with lovely purple flowers.",
      },
      {
        id: 8,
        name: "Rosemary",
        price: 179,
        image: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?auto=format&fit=crop&w=600&q=80",
        description: "A fragrant herb with needle-like leaves.",
      },
      {
        id: 9,
        name: "Mint",
        price: 99,
        image: "https://images.unsplash.com/photo-1628557044797-f21a177c37ec?auto=format&fit=crop&w=600&q=80",
        description: "A refreshing herb with bright green leaves.",
      },
      {
        id: 10,
        name: "Lemon Balm",
        price: 149,
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80",
        description: "A lemon-scented herb for a kitchen garden.",
      },
      {
        id: 11,
        name: "Basil",
        price: 129,
        image: "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?auto=format&fit=crop&w=600&q=80",
        description: "An aromatic culinary herb with soft leaves.",
      },
      {
        id: 12,
        name: "Thyme",
        price: 159,
        image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=600&q=80",
        description: "A compact herb with a distinctive fragrance.",
      },
    ],
  },
  {
    name: "Medicinal and Wellness Plants",
    description: "Discover useful plants for your home garden.",
    plants: [
      {
        id: 13,
        name: "Aloe Vera",
        price: 199,
        image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
        description: "A succulent known for its gel-filled leaves.",
      },
      {
        id: 14,
        name: "Holy Basil (Tulsi)",
        price: 129,
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80",
        description: "A traditional aromatic plant popular in India.",
      },
      {
        id: 15,
        name: "Ginger Plant",
        price: 179,
        image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
        description: "A tropical plant grown for its aromatic rhizome.",
      },
      {
        id: 16,
        name: "Lemongrass",
        price: 149,
        image: "https://images.unsplash.com/photo-1530968464165-7a1861cbaf9f?auto=format&fit=crop&w=600&q=80",
        description: "A fragrant grass often used in herbal teas.",
      },
      {
        id: 17,
        name: "Gotu Kola",
        price: 169,
        image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=600&q=80",
        description: "A creeping herb traditionally used in wellness practices.",
      },
      {
        id: 18,
        name: "Eucalyptus",
        price: 299,
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80",
        description: "An aromatic plant with distinctive foliage.",
      },
    ],
  },
];

// Shared navbar: use this on both the Plants and Cart pages
export function Navbar() {
  const cartQuantity = useSelector(selectCartQuantity);

  return (
    <nav className="nursery-navbar">
      <Link to="/" className="nursery-brand">
        🌿 Paradise Nursery
      </Link>

      <div className="nursery-nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Plants</Link>
        <Link to="/cart" className="cart-link" aria-label={`Cart, ${cartQuantity} items`}>
          🛒 Cart <span className="cart-count">{cartQuantity}</span>
        </Link>
      </div>
    </nav>
  );
}

function ProductCard({ plant, isAdded, onAdd }) {
  return (
    <article className="plant-card">
      <img
        src={plant.image}
        alt={plant.name}
        className="plant-image"
        loading="lazy"
      />

      <div className="plant-card-content">
        <h3>{plant.name}</h3>
        <p className="plant-description">{plant.description}</p>
        <p className="plant-price">₹{plant.price.toFixed(2)}</p>

        <button
          type="button"
          className="add-cart-button"
          disabled={isAdded}
          onClick={() => onAdd(plant)}
        >
          {isAdded ? "Added to Cart ✓" : "Add to Cart"}
        </button>
      </div>
    </article>
  );
}

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="product-list-page">
      <Navbar />

      <header className="products-header">
        <h1>Our Houseplant Collection 🌱</h1>
        <p>
          Find the perfect plants to bring freshness and beauty
          into your home.
        </p>
      </header>

      <main className="plant-categories">
        {plantCategories.map((category) => (
          <section className="plant-category" key={category.name}>
            <h2>{category.name}</h2>
            <p className="category-description">{category.description}</p>

            <div className="plant-grid">
              {category.plants.map((plant) => {
                const isAdded = cartItems.some(
                  (item) => item.id === plant.id
                );

                return (
                  <ProductCard
                    key={plant.id}
                    plant={plant}
                    isAdded={isAdded}
                    onAdd={handleAddToCart}
                  />
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
