import React from 'react';

function AnimalItem({ animal }) {
  const { name, category, species, price, image_url } = animal;

  const handleAddToCart = () => {
    // Add logic to handle adding the animal to the cart
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>Category: {category}</p>
      <p>Species: {species}</p>
      <p>Price: ${price}</p>
      <img src={image_url} alt={name} />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default AnimalItem;
