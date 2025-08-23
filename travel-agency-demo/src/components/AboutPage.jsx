import React from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';

const AboutPage = () => {
  return (
    <motion.div
      className="page-transition"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <section id="about" className="testimonials-section">
        <h2>About Us</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p>Wanderlust Adventures is your premier partner in exploring the world. We specialize in creating custom tour packages, finding the best hotels, and ensuring your travel is seamless and unforgettable. Our team of experienced travel planners is dedicated to turning your dream vacation into a reality.</p>
          <p style={{ marginTop: '20px' }}>Our mission is to provide you with the most authentic and enriching travel experiences, tailored to your unique interests and desires. We believe that every journey tells a story, and we're here to help you write yours.</p>
        </div>
      </section>
      <section className="testimonials-section" style={{ background: '#fff' }}>
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
      <Footer />
    </motion.div>
  );
};

export default AboutPage;