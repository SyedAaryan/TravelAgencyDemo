import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Modal from './Modal';
import Footer from './Footer';

const destinationData = {
    paris: {
        title: "Paris, France",
        tagline: "Experience the romance and charm of the City of Light.",
        heroClass: "hero-paris",
        tours: [
            "3 Day Paris Highlights",
            "7 Day Parisian Escape",
            "10 Day Ultimate Paris Experience"
        ],
        hotels: [
            "Hotel Plaza Athénée",
            "The Ritz Paris",
            "Le Meurice"
        ]
    },
    kyoto: {
        title: "Kyoto, Japan",
        tagline: "Immerse yourself in ancient temples and serene gardens.",
        heroClass: "hero-kyoto",
        tours: [
            "3 Day Kyoto Explorer",
            "7 Day Japanese Tradition Tour",
            "10 Day Cultural Immersion"
        ],
        hotels: [
            "Hyatt Regency Kyoto",
            "The Ritz-Carlton, Kyoto",
            "Four Seasons Hotel Kyoto"
        ]
    },
    bali: {
        title: "Bali, Indonesia",
        tagline: "Discover a tropical paradise with stunning beaches and vibrant culture.",
        heroClass: "hero-bali",
        tours: [
            "3 Day Bali Explorer",
            "7 Day Balinese Adventure",
            "10 Day Island Getaway"
        ],
        hotels: [
            "Ubud Village Resort & Spa",
            "Ayana Resort and Spa, BALI",
            "The St. Regis Bali Resort"
        ]
    }
};

// We now accept 'onOpenModal' as a prop
const DestinationPage = ({ onOpenModal }) => {
    const { destinationId } = useParams();
    const data = destinationData[destinationId];

    if (!data) {
        return <div>Destination not found!</div>;
    }

    return (
        <motion.div
          className="page-transition"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
            <section className={`hero-section ${data.heroClass}`}>
                <div className="hero-content">
                    <h1>{data.title}</h1>
                    <p>{data.tagline}</p>
                </div>
            </section>

            <section className="destination-details-section">
                <div className="details-content">
                    <Link to="/" className="back-btn"><i className="fas fa-arrow-left"></i> Back to Destinations</Link>
                    
                    <div className="details-grid">
                        <div className="details-card">
                            <h3>Tour Packages</h3>
                            <ul>
                                {data.tours.map(tour => (
                                    // We directly call the function from props
                                    <li key={tour}><a href="#" onClick={onOpenModal}>{tour}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className="details-card">
                            <h3>Hotels</h3>
                            <ul>
                                {data.hotels.map(hotel => (
                                    // We directly call the function from props
                                    <li key={hotel}><a href="#" onClick={onOpenModal}>{hotel}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </motion.div>
    );
};

export default DestinationPage;