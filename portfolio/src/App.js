import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import Proj from './Projects-home';
import Footer from './Footer';
import './App.css';
import Skills from './Skills';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Proj />
      <Footer />
    </>
  );
}

export default App;
