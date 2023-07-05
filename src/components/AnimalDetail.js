import React from 'react';
import { useParams } from 'react-router-dom';

function AnimalDetail() {
  const { id } = useParams();

  // Fetch animal details using the 'id' parameter

  return (
    <div>
      <h2>Animal Details</h2>
      {/* Display animal details */}
    </div>
  );
}

export default AnimalDetail;
