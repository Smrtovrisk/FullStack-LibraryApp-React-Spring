import React from 'react';
import './App.css';
import { Navbar } from './Layouts/NavbarAndFooter/Navbar';
import { ExportTopBooks } from './Layouts/HomePage/ExploreNewBooks';
import { Carousel } from './Layouts/HomePage/Carousel';

function App() {
  return (
    <div>
      <Navbar />
      <ExportTopBooks />
      <Carousel />
    </div>
  );
}

export default App;
