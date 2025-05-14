import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { Link } from "react-router-dom";
import './Header.css';
import { getAllSearchApartment, getAllSearchAttraction, getAllSearchRestaurant } from '../../services/admin';

const Header = () => {
    const [query, setQuery] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const handleSearch = async (e) => {
        const searchQuery = e.target.value;
        setQuery(searchQuery);

        if (searchQuery.trim() === "") {
            setFilteredResults([]);
            return;
        }

        try {
            const apartmentResult = await getAllSearchApartment(searchQuery);
            const attractionResult = await getAllSearchAttraction(searchQuery);
            const restaurantResult = await getAllSearchRestaurant(searchQuery);

            const merged = [...apartmentResult, ...attractionResult, ...restaurantResult];
            setFilteredResults(merged);
        } catch (error) {
            console.error("Search failed:", error);
            setFilteredResults([]);
        }
    };
    const handleSearchClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setFilteredResults([]);
        setQuery("");
        setShowModal(false);
    };
    const returnHomePge = () => {

    };

    return (
        <header className="header">

            <div className="logo-section">
                <Link to="/">
                    <img src="/logo.png" alt="Logo" className="logo" onClick={returnHomePge} />
                </Link>

            </div>
            <nav className="nav-links">
                <a href="about">אודות</a>
                <a href="contact">צור קשר</a>
                <a href="advertise">פרסום באתר</a>
                <a href="/catalog.pdf" download>הורדת קטלוג</a>
            </nav>

            <div className="search-section">
                <button onClick={handleSearchClick} className="search-icon">
                    <FaSearch />
                </button>
            </div>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <input
                            type="text"
                            value={query}
                            onChange={handleSearch}
                            placeholder="היכן נטייל..."
                        />
                        <button onClick={handleCloseModal} className="close-btn">X</button>
                        {filteredResults.length > 0 && showModal && (
                            <div className="search-results">
                                <h3>תוצאות חיפוש:</h3>
                                <ul>
                                    {filteredResults.map((result) => {
                                        if (result.collectionName === "apartment") {
                                            return (
                                                <li key={result._id}>
                                                    <strong>{result.name}</strong>
                                                    <p>{result.descriptions.description}</p>
                                                </li>
                                            );
                                        } else if (result.collectionName === "attraction") {
                                            return (
                                                <li key={result._id}>
                                                    <strong>{result.name}</strong>
                                                    <p>{result.descriptions}</p>
                                                </li>
                                            );
                                        } else {
                                            return (
                                                <li key={result._id}>
                                                    <strong>{result.name}</strong>
                                                    <p>{result.description}</p>
                                                </li>
                                            );
                                        }
                                    })}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
