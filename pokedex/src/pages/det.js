// pages/det.js
import React from "react";
import DetailPok from "../components/details";
import { useParams } from 'react-router-dom';
import Evolution from "../components/evolution";

function Detail({pokemonDataList}) {
    const { id } = useParams();

    if (pokemonDataList.length === 0) {
        return <div style={ {color: 'white', fontStyle: 'italic', fontSize: '40px', marginLeft:'40px', marginTop: '80px'}}>Loading...</div>;
    }

    const pokemonData = pokemonDataList.find((pokemon) => pokemon.id === parseInt(id));

    if (!pokemonData) {
        return <div>Pokémon not found</div>;
    }

    return (
        <div>
            <DetailPok pokemonData={pokemonData} />
            <Evolution pokemonData={pokemonData}/>
        </div>
    );
}

export default Detail;
