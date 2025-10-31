import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <Navbar />
      </header>

      <main>
        <Home />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
