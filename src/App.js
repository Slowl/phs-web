import React from 'react';
import { Router } from "@reach/router"
import MainApp from './pages/MainApp'
import Nav from './components/Nav'
import Footer from './components/Footer'

const App = () => {
    return (
      <div className="App">
        <Nav />
        <MainApp />
        <Footer />
      </div>
    );
  }

export default App;
