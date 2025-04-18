import React from 'react';
import RestauranteCard from './RestaurantCard';

function RestauranteList({ restaurantes }) {
  return (
    <div className="card-container">
      {restaurantes.map((restaurante, index) => (
        <RestauranteCard key={index} restaurante={restaurante} />
      ))}
    </div>
  );
}

export default RestauranteList;