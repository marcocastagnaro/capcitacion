import React, { useEffect, useState } from "react";
import axios from "axios";

function Evolution({ pokemonData }) {
    const [evolutions, setEvolutions] = useState([]);
    const [id, setId] = useState(null); // Agrega el estado para el ID

    async function findPokemonByName(names) {
        try {
            const promises = names.map(async (name) => {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
                return response.data;
            });

            const evolutionsData = await Promise.all(promises);
            return evolutionsData;
        } catch (error) {
            console.error("Error fetching evolution details:", error);
            return [];
        }
    }

    useEffect(() => {
        if (pokemonData && pokemonData.species && pokemonData.species.url) {
            async function fetchData() {
                try {
                    const response = await axios.get(pokemonData.species.url);
                    if (response) {
                        setId(response.data.id);
                        const evolutionsNames = [];
                        const url = response.data.evolution_chain.url;
                        const evolutionChainResponse = await axios.get(url);
                        let pointer = evolutionChainResponse.data.chain;

                        while (pointer.evolves_to.length > 0) {
                            evolutionsNames.push(pointer.species.name);
                            pointer = pointer.evolves_to[0];
                        }
                        evolutionsNames.push(pointer.species.name);

                        const evolutionsData = await findPokemonByName(evolutionsNames);
                        setEvolutions(evolutionsData);
                    }
                } catch (e) {
                    console.log(e);
                }
            }
            fetchData();
        }
    }, [pokemonData]);

    return (
        <div style={{ marginTop: '-100px', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '25px' }}>
            <h2 style={{ color: 'white', textAlign: 'center', textDecoration: 'underline'}}>Evolutions</h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
                {evolutions.map((evolution) => (
                    <div key={evolution.id} style={{ textAlign: 'center', margin: '0 20px' }}>
                        <p style={{color: 'white', fontSize: '18px', marginBottom: '5px' }}>#{evolution.id}</p>
                        <p style={{ color: 'white', backgroundColor: 'black', display: 'inline', padding: '2px 4px' }}>{evolution.name}</p>
                        <img style={{ marginTop: '10px', width: '200px', height: '200px' }} src={evolution.sprites.front_default} alt={evolution.name} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Evolution;
