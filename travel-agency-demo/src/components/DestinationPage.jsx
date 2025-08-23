import React, { useState } from 'react'; // Import useState
import { useParams, Link } from 'react-router-dom';
import Modal from './Modal'; // Import the Modal component

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

const DestinationPage = () => {
    const { destinationId } = useParams();
    const data = destinationData[destinationId];

    // Modal state
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLinkClick = (e) => {
        e.preventDefault(); // Prevent the link from navigating
        setIsModalOpen(true);
    };

    if (!data) {
        return <div>Destination not found!</div>;
    }

    return (
        <>
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
                                    <li key={tour}><a href="#" onClick={handleLinkClick}>{tour}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className="details-card">
                            <h3>Hotels</h3>
                            <ul>
                                {data.hotels.map(hotel => (
                                    <li key={hotel}><a href="#" onClick={handleLinkClick}>{hotel}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Modal Component */}
            <Modal
                show={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="This is a Demo"
                message="This feature is not active"
            />
        </>
    );
};

export default DestinationPage;