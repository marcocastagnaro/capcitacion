// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/home";
import React, { useState, useEffect } from "react";
import Detail from "./pages/det";
import axios from 'axios';

function App() {
    const [pokemonDataList, setPokemonList] = useState([]);

    useEffect(() => {
        const fetchPokemonList = async () => {
            const numberOfPokemons = 200;
            const pokemonDataList = [];

            for (let i = 1; i <= numberOfPokemons; i++) {
                try {
                    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
                    pokemonDataList.push(response.data);
                } catch (error) {
                    console.error('Error fetching data for Pokémon:', i);
                }
            }

            setPokemonList(pokemonDataList);
        };

        fetchPokemonList();
    }, []);
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home pokemonDataList={pokemonDataList} />} />
                <Route path="/details/:id" element={<Detail pokemonDataList={pokemonDataList} />} />
            </Routes>
        </Router>
    );
}

export default App;
