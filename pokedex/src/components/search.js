import React from 'react';
import '../css/search.css'
const SearchBar = ({ searchTerm, onSearchTermChange }) => {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search by name...        "
                value={searchTerm}
                onChange={(e) => onSearchTermChange(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;