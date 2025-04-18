import React from 'react';

function RestauranteCard({ restaurante }) {
  return (
    <div className="card">
      <h2>{restaurante.nombre}</h2>
      <p>Ciudad: {restaurante.ciudad}</p>
      <p>Provincia: {restaurante.provincia}</p>
      <p>Comunidad Autónoma: {restaurante.comunidad_autonoma}</p>
      <p>Dirección: {restaurante.dirección}</p>
      <p>Teléfono: {restaurante.teléfono}</p>
      <p>Chef Ejecutivo: {restaurante.chef_ejecutivo}</p>
      <p>Precio Medio Menú: {restaurante.precio_medio_menu}</p>
      <p>Número de Estrellas Michelin: {restaurante.numero_estrellas}</p>
      <p>Plato Más Representativo: {restaurante.plato_mas_representativo}</p>
    </div>
  );
}

export default RestauranteCard;