import React from 'react';
import '../css/filter.css'

const FilterSelect = ({ selectedType, onTypeChange, types }) => {
    return (
        <div className="filter-select">
            <select value={selectedType} onChange={(e) => onTypeChange(e.target.value)}>
                <option value="">All Types</option>
                {types.map((type) => (
                    <option key={type} value={type}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default FilterSelect;
