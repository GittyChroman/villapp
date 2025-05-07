import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import './Header.css';
import { getAllResultsApartment,getAllResultsAttraction,getAllResultsRestaurant } from '../../services/admin';

const Header = () => {
    const [query, setQuery] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const handleSearch = async (e) => {
        const searchQuery = e.target.value;
        setQuery(searchQuery);
        setFilteredResults(searchQuery);
        getAllResultsApartment(searchQuery);
        getAllResultsAttraction(searchQuery);
        getAllResultsRestaurant(searchQuery);
    };

    const handleSearchClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <header className="header">
            <div className="logo-section">
                <img src="/logo.png" alt="Logo" className="logo" />
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
                    </div>
                </div>
            )}

            {filteredResults.length > 0 && showModal && (
                <div className="search-results">
                    <h3>תוצאות חיפוש:</h3>
                    <ul>
                        {filteredResults.map((result) => (
                            <li key={result._id}>
                                <strong>{result.title}</strong>: {result.description}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
