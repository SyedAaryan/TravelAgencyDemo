import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import HomePage from './components/HomePage';
import DestinationPage from './components/DestinationPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Modal from './components/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  // This function will be passed down to open the modal
  const handleOpenModal = (e) => {
    if (e) e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <Header onBookNowClick={handleOpenModal} />
      <div style={{ position: 'relative', minHeight: '80vh' }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            {/* We pass the open modal function here */}
            <Route path="/:destinationId" element={<DestinationPage onOpenModal={handleOpenModal} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Modal
        show={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="This is a Demo"
        message="This feature is not active. Please contact us for more information."
      />
    </>
  );
}

export default App;