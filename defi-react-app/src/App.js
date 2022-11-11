import React from 'react';
import './App.css';

import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Developers from './components/developer/Developer';
import Subscribe from './components/subscribe/Subscribe';

function App() {
  return (
      <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Developers/>
        <Subscribe/>
      </div>
  );
}

export default App;
