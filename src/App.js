import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import RestauranteList from './components/RestaurantList';
import restaurantesData from './data/restaurantes.json';

function App() {
  return (
    <div className="App">
      <Header />
      <RestauranteList restaurantes={restaurantesData.Restaurantes} />
      <Footer />
    </div>
  );
}

export default App;
