import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AnimalItem from './AnimalItem';

function AnimalsPage() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await axios.get('http://localhost:3000/pets');
        setAnimals(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAnimals();
  }, []);

  return (
    <div>
      <h2>Animals Available for Adoption</h2>
      <div>
        {animals.map((animal) => (
          <AnimalItem key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
}

export default AnimalsPage;
