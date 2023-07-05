import React from 'react';

import { Footer, Blog, Possibility, Features, About, Header } from './containers';
import { Donate, Brand, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <About />
    <Features />
    <Possibility />
    <Donate />
    <Blog />
    <Footer />
  </div>
);

export default App;
