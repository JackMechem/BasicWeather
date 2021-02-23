import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './comps/Header';
import Footer from './comps/Footer';
import Weather from './comps/Weather.jsx';
import SetWeather from './comps/SetWeather';


const App = () => {
  return (
    <div>
      
      <Header text="Weather"/>
      
      <Weather city="Las Vegas"/>
      <Footer/>
    </div>
  );
}

export default App;
