import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <section id="destinations" className="destinations-section">
        <h2>Featured Destinations</h2>
        <div className="destination-grid">
          <Link to="/paris" className="destination-card">
            <img src="/images/paris.png" alt="Paris, France" />
            <h3>Paris, France</h3>
            <p>The City of Light awaits with its iconic landmarks and romantic charm.</p>
          </Link>
          <Link to="/kyoto" className="destination-card">
            <img src="/images/kyoto.png" alt="Kyoto, Japan" />
            <h3>Kyoto, Japan</h3>
            <p>Immerse yourself in ancient temples and serene gardens.</p>
          </Link>
          <Link to="/bali" className="destination-card">
            <img src="/images/bali.png" alt="Bali, Indonesia" />
            <h3>Bali, Indonesia</h3>
            <p>Discover a tropical paradise with stunning beaches and vibrant culture.</p>
          </Link>
        </div>
      </section>

      <section id="about" className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-container">
          <div className="testimonial-card">
            <p>"Wanderlust Adventures made our dream vacation a reality. Everything was seamless!"</p>
            <h4>- Jane Doe</h4>
          </div>
          <div className="testimonial-card">
            <p>"The best travel agency I've ever used. Highly recommend their services."</p>
            <h4>- John Smith</h4>
          </div>
          <div className="testimonial-card">
            <p>"An incredible experience from start to finish. The team was so helpful and attentive."</p>
            <h4>- Emily Chen</h4>
          </div>
          <div className="testimonial-card">
            <p>"Our family trip was perfect thanks to Wanderlust Adventures. We'll be back!"</p>
            <h4>- David Rodriguez</h4>
          </div>
          <div className="testimonial-card">
            <p>"From planning to execution, every detail was handled professionally. A five-star service."</p>
            <h4>- Sarah Williams</h4>
          </div>
          <div className="testimonial-card">
            <p>"I've never had a more stress-free travel experience. Thank you!"</p>
            <h4>- Michael Brown</h4>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>Ready to plan your next adventure? Get in touch with us!</p>
        <div className="contact-info">
          <p><i className="fas fa-envelope"></i> contact@wanderlust.com</p>
          <p><i className="fas fa-phone-alt"></i> +1 (123) 456-7890</p>
          <p><i className="fas fa-map-marker-alt"></i> 123 Travel Lane, Adventure City</p>
        </div>
      </section>
    </>
  );
};

export default HomePage;