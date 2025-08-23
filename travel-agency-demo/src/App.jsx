import React, { useState } from 'react'; // Import useState
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import DestinationPage from './components/DestinationPage';
import Footer from './components/Footer';
import Modal from './components/Modal'; // Import the Modal component

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookNowClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <Header onBookNowClick={handleBookNowClick} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:destinationId" element={<DestinationPage />} />
      </Routes>
      <Footer />
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