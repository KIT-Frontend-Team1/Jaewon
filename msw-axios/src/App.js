import React, { useState, useEffect } from 'react';
import getCharacter from './axios/axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getCharacter(4);
      setData(result);
    };

    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className='App'>
      <h1>{data.name}</h1>
      <p>Height: {data.height}</p>
      <p>Mass: {data.mass}</p>
    </div>
  );
}

export default App;
