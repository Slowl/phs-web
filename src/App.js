import React from 'react';
import styled from 'styled-components'
import { Router } from "@reach/router"
import Nav from './components/Nav'
import MainApp from './pages/MainApp'
import About from './pages/About'
import Footer from './components/Footer'

const Container = styled(Router)`
  height: calc(100vh - 6em);
`

const App = () => {
    return (
      <div>
        <Nav />
        <Container>
          <MainApp path="home" />
          <About path="about" />
        </Container>
        <Footer />
      </div>
    );
  }

export default App;
