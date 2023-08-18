import React, { useEffect, useState } from 'react';
import PokemonCard from './pokemoncard';
import '../css/lista.css';
import { Pagination } from '@mui/material';
import SearchBar from "./search";
import FilterSelect from "./filter";

const PokemonList = ({pokemonDataList}) => {
    const cardsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);
    const [uniqueTypes, setUniqueTypes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState('');


    useEffect(() => {
        const types = pokemonDataList.flatMap((pokemon) => pokemon.types.map((type) => type.type.name));
        const uniqueTypes = [...new Set(types)];
        setUniqueTypes(uniqueTypes);
    }, [pokemonDataList]);

    const filteredPokemonList = pokemonDataList.filter((pokemon) => {
        const nameMatch = pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
        const typeMatch = selectedType === '' || pokemon.types.some((type) => type.type.name === selectedType);
        return nameMatch && typeMatch;
    });
    const handleChangePage = (event, newPage) => {
        setCurrentPage(newPage);
    };

    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const itemsToShow = filteredPokemonList.slice(startIndex, endIndex);

    return (
        <div>
            <div className="search-and-filter" style={{display: 'flex'}}>
                <SearchBar searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />
                <FilterSelect selectedType={selectedType} onTypeChange={setSelectedType} types={uniqueTypes} />
            </div>
            <div className="card-container">
                {itemsToShow.map((pokemonData) => (
                    <div key={pokemonData.id}>
                        <PokemonCard pokemonData={pokemonData} />
                    </div>
                ))}
            </div>

            <div className= "paginacion">
                <Pagination
                    count={Math.ceil(pokemonDataList.length / cardsPerPage)}
                    page={currentPage}
                    onChange={handleChangePage}
                    style ={{color: "lightblue", alignContent: "center", justifyContent: "center"}}
                    size="large"
                />
            </div>
        </div>
    );
};

export default PokemonList;
