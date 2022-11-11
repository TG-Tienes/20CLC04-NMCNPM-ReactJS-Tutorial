import React from 'react';
import './App.css';

import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Developers from './components/developer/Developer';

function App() {
  return (
      <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Developers/>
      </div>
  );
}

export default App;
