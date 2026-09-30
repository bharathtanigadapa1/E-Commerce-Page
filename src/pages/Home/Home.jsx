import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"

function Home() {
    return (
        <div className="home">

            {/* Hero Section */}
            <section className="hero">

                <div className="hero-content">
                    <p className="welcome-text">WELCOME TO E-COMMERCE</p>

                    <h1>
                        Shop Smart.
                        <br />
                        <span>Live Better.</span>
                    </h1>

                    <p className="hero-description">
                        Discover amazing products at great prices.
                        Shop your favorite items from the comfort of your home.
                    </p>

                    <Link to="/product">
                        <button className="shop-button">
                            🛍️ Shop Now
                        </button>
                    </Link>
                </div>

                <div className="hero-image">
                    <div className="shopping-circle">
                        🛒
                    </div>

                    <span className="floating-item item1">📦</span>
                    <span className="floating-item item2">🛍️</span>
                    <span className="floating-item item3">🎁</span>
                    <span className="floating-item item4">💳</span>
                </div>

            </section>


            {/* Features */}
            <section className="features">

                <h2>Why Shop With Us?</h2>

                <div className="feature-container">

                    <div className="feature-card">
                        <div className="feature-icon">🚚</div>
                        <h3>Fast Delivery</h3>
                        <p>
                            Get your orders delivered quickly and safely
                            to your doorstep.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">🔒</div>
                        <h3>Secure Shopping</h3>
                        <p>
                            Your information and payments are protected
                            with secure technology.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">💰</div>
                        <h3>Best Prices</h3>
                        <p>
                            Find quality products at affordable and
                            competitive prices.
                        </p>
                    </div>

                </div>

            </section>


            {/* Categories */}
            <section className="categories">

                <h2>Explore Categories</h2>

                <div className="category-container">

                    <div className="category-card">
                        <span>👕</span>
                        <h3>Fashion</h3>
                    </div>

                    <div className="category-card">
                        <span>📱</span>
                        <h3>Electronics</h3>
                    </div>

                    <div className="category-card">
                        <span>🏠</span>
                        <h3>Home</h3>
                    </div>

                    <div className="category-card">
                        <span>🎮</span>
                        <h3>Gaming</h3>
                    </div>

                </div>

            </section>

        </div>
    )
}

export default Home