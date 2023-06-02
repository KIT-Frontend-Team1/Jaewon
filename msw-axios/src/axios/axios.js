import axios from 'axios';

const getCharacter = async id => {
  const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
  return response.data;
};

export default getCharacter;
