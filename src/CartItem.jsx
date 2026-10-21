
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  selectCartItems,
  selectCartTotal,
} from "../features/cart/CartSlice";

import { Navbar } from "./ProductList";
import "./CartItem.css";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectCartTotal);
  const [checkoutMessage, setCheckoutMessage] = useState("");

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleCheckout = () => {
    setCheckoutMessage("Checkout Coming Soon! Thank you for shopping with Paradise Nursery. 🌿");
  };

  return (
    <div className="shopping-cart-page">
      <Navbar />

      <main className="cart-container">
        <header className="cart-header">
          <h1>Your Shopping Cart 🛒</h1>
          <p>Review your plants and make your home greener.</p>
        </header>

        {cartItems.length === 0 ? (
          <section className="empty-cart">
            <div className="empty-cart-icon">🪴</div>
            <h2>Your cart is empty</h2>
            <p>
              Your next favorite plant is waiting to be discovered!
            </p>
            <Link to="/products" className="continue-shopping-btn">
              Continue Shopping
            </Link>
          </section>
        ) : (
          <>
            <div className="cart-layout">
              <section className="cart-items-section">
                <div className="cart-items-heading">
                  <h2>Cart Items</h2>
                  <span>{totalItems} plant(s)</span>
                </div>

                {cartItems.map((item) => {
                  const itemTotal = item.price * item.quantity;

                  return (
                    <article className="cart-item-card" key={item.id}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="cart-item-image"
                      />

                      <div className="cart-item-details">
                        <h3>{item.name}</h3>

                        <p className="cart-unit-price">
                          Unit price: ₹{item.price.toFixed(2)}
                        </p>

                        <p className="cart-item-subtotal">
                          Subtotal: ₹{itemTotal.toFixed(2)}
                        </p>

                        <div className="cart-item-actions">
                          <div
                            className="quantity-controls"
                            aria-label={`Quantity for ${item.name}`}
                          >
                            <button
                              type="button"
                              aria-label={`Decrease ${item.name} quantity`}
                              onClick={() =>
                                dispatch(decreaseQuantity(item.id))
                              }
                            >
                              −
                            </button>

                            <span aria-live="polite">
                              {item.quantity}
                            </span>

                            <button
                              type="button"
                              aria-label={`Increase ${item.name} quantity`}
                              onClick={() =>
                                dispatch(increaseQuantity(item.id))
                              }
                            >
                              +
                            </button>
                          </div>

                          <button
                            type="button"
                            className="delete-item-btn"
                            onClick={() =>
                              dispatch(removeFromCart(item.id))
                            }
                          >
                            Delete
                          </button>
                        </div>
                      </div>

                      <div className="cart-item-total">
                        ₹{itemTotal.toFixed(2)}
                      </div>
                    </article>
                  );
                })}

                <Link
                  to="/products"
                  className="continue-shopping-link"
                >
                  ← Continue Shopping
                </Link>
              </section>

              <aside className="cart-summary">
                <h2>Order Summary</h2>

                <div className="summary-row">
                  <span>Total plant quantity</span>
                  <span>{totalItems}</span>
                </div>

                <div className="summary-row">
                  <span>Number of plant types</span>
                  <span>{cartItems.length}</span>
                </div>

                <div className="summary-divider" />

                <div className="summary-total">
                  <span>Total Amount</span>
                  <strong>₹{totalAmount.toFixed(2)}</strong>
                </div>

                <button
                  type="button"
                  className="checkout-btn"
                  onClick={handleCheckout}
                >
                  Checkout
                </button>

                {checkoutMessage && (
                  <p className="checkout-message" role="status">
                    {checkoutMessage}
                  </p>
                )}

                <p className="checkout-note">
                  Thank you for choosing Paradise Nursery!
                </p>
              </aside>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default CartItem;
