import axios from 'axios';

const getPokemon = async id => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  return response.data;
};

export default getPokemon;
