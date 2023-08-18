import React from 'react';
import {Button, Card, CardContent, CardMedia, Typography} from '@mui/material';
import '../css/card.css';

function PokemonCard ({ pokemonData }){

    const typeColors = {
        normal: '#A8A77A',
        fire: '#EE8130',
        water: '#6390F0',
        electric: '#F7D02C' ,
        grass: '#7AC74C' ,
        ice: '#96D9D6' ,
        fighting: '#C22E28',
        poison: '#A33EA1' ,
        ground: '#E2BF65' ,
        flying: '#A98FF3' ,
        psychic: '#F95587' ,
        bug: '#A6B91A' ,
        rock: '#B6A136' ,
        ghost: '#735797' ,
        dragon: '#6F35FC' ,
        dark: '#705746' ,
        steel: '#B7B7CE' ,
        fairy: '#D685AD'
    };

    const { name, id, sprites, types } = pokemonData;

    const typesJSX = types.map((type, index) => (
        <React.Fragment key={index}>
    <span style={{justifyContent: 'center',boxShadow: `0 2px 4px rgba(0, 0, 0, 0.2)`, backgroundColor: typeColors[type.type.name], color: 'white', padding: '5px', borderRadius: '5px', textTransform: 'capitalize', marginRight: '5px'}}>
  {type.type.name}
</span>
            {index < types.length - 1 && ' '}
        </React.Fragment>
    ));
    const redirectToDetails = () => {
        window.location.assign(`/details/${id}`);
    }

    return (
        <div className="card">
            <Card sx={{ maxWidth: 345}} style={{borderRadius: '1px', backgroundColor:'rgba(0,0,0,0'}}>
                <div className="media" onClick={redirectToDetails} style = {{cursor: 'pointer'}}>
                    <CardMedia component="img" height="140" image={sprites.front_default} alt={name}/>
                    <div className="pokemon-id">{id}</div>
                </div>
                <div className='contenido'>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style ={{color: 'white'}}>
                            {name.charAt(0).toUpperCase() + name.slice(1)}
                        </Typography>
                        <Typography variant="body" color="text.secondary">
                            {typesJSX}
                        </Typography>
                    </CardContent>
                </div>
            </Card>
        </div>
    );
};

export default PokemonCard;
