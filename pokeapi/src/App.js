import React, { useEffect, useState } from 'react';
import getPokemon from './axios/axios';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await Promise.all(
        //병렬로 실행
        Array.from({ length: 10 }, (_, i) => getPokemon(i + 1)),
      );
      setPokemon(result);
    };
    fetchData();
  }, []);

  return (
    <div className='App'>
      {pokemon.length > 0 ? (
        pokemon.map((poke, i) => (
          <div key={i}>
            <h1>{poke.name}</h1>
            <img src={poke.sprites.front_default} alt={poke.name} />
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;
