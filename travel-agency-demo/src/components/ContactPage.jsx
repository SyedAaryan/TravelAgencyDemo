import React from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';

const ContactPage = () => {
  return (
    <motion.div
      className="page-transition"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>Ready to plan your next adventure? Get in touch with us!</p>
        <div className="contact-info">
          <p><i className="fas fa-envelope"></i> contact@wanderlust.com</p>
          <p><i className="fas fa-phone-alt"></i> +1 (123) 456-7890</p>
          <p><i className="fas fa-map-marker-alt"></i> 123 Travel Lane, Adventure City</p>
        </div>
      </section>
      <Footer />
    </motion.div>
  );
};

export default ContactPage;