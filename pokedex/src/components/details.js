import React from "react";
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import '../css/detail.css'
function DetailPok({ pokemonData }) {
    const {name, sprites, types, stats, weight, base_experience, height} = pokemonData;
    const typeColors = {
        normal: '#A8A77A',
        fire: '#EE8130',
        water: '#6390F0',
        electric: '#F7D02C',
        grass: '#7AC74C',
        ice: '#96D9D6',
        fighting: '#C22E28',
        poison: '#A33EA1',
        ground: '#E2BF65',
        flying: '#A98FF3',
        psychic: '#F95587',
        bug: '#A6B91A',
        rock: '#B6A136',
        ghost: '#735797',
        dragon: '#6F35FC',
        dark: '#705746',
        steel: '#B7B7CE',
        fairy: '#D685AD'
    };
    const typesJSX = types.map((type, index) => (
        <React.Fragment key={index}>
    <span
        style={{
            boxShadow: `0 2px 4px rgba(0, 0, 0, 0.2)`,
            backgroundColor: typeColors[type.type.name],
            color: 'white',
            padding: '5px',
            borderRadius: '5px',
            textTransform: 'capitalize',
            marginRight: '5px',
        }}
    >
  {type.type.name}
</span>
            {index < types.length - 1 && ' '}
        </React.Fragment>
    ));

    return (
        <div className='detail-container'>
            <div className= 'header'>
                <h1>
                    Pokedex
                </h1>
            </div>
            <div className="carta">
                <Card sx={{ display: 'flex' }} style={{ backgroundColor: 'black', borderRadius: '12px', width: '700px'}}>
                    <div style={{ flex: 1 }}>
                        <CardMedia
                            component="img"
                            height="240"
                            image={sprites.front_default}
                            alt={name}
                        />
                        <div style={{ padding: '10px', marginLeft:'80px'}}>
                            <CardContent>
                                <Typography style = {{color: 'white', marginTop: '20px'}}>
                                    <h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    {typesJSX}
                                </Typography>
                            </CardContent>
                        </div>
                        <div className = 'caract'>
                            <CardContent>
                                <Typography style={{ opacity:'1',fontWeight: 'bold',marginLeft: '20%' , color: 'yellow', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <span>Height</span>
                                        <span>{height}m</span>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <span>Weight</span>
                                        <span>{weight}kg</span>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <span>Exp</span>
                                        <span>{base_experience} exp</span>
                                    </div>
                                </Typography>
                            </CardContent>
                        </div>
                    </div>
                    <div style={{padding: '10px', opacity: '1' }}>
                        <CardContent>
                            <Typography variant="body1" color="text.secondary" style={{ color: 'yellow', fontSize: '20px'}}>
                                Statistics:
                            </Typography>
                            {stats.map(stat => (
                                <div
                                    key={stat.stat.name}
                                    style={{marginBottom: '10px', marginTop: '20px', backgroundColor: 'lightblue', padding: '10px', borderRadius: '10px', boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)', border: '1px solid gray', width: `${stat.base_stat + 50}px`}}
                                >
                                    <Typography variant="body2" color="text.primary">
                                        {stat.stat.name}: {stat.base_stat}
                                    </Typography>
                                </div>
                            ))}
                        </CardContent>
                    </div>
                </Card>
            </div>
        </div>
    );

}

export default DetailPok;
