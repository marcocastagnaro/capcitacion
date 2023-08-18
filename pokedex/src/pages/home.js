import React from 'react';
import PokemonList from "../components/pokemonlist";
import '../css/home.css';
function Home ({pokemonDataList}){
    console.log('pokemonDataList:', pokemonDataList);

    return(
        <div>
            <div className= 'header'>
                <h1>
                    Pokedex
                </h1>
            </div>
            <PokemonList pokemonDataList={pokemonDataList}/>
        </div>
    );
}
export default Home;