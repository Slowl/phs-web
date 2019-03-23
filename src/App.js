import React from 'react';
import styled from 'styled-components'
import { Router } from "@reach/router"
import Nav from './components/Nav'
import MainApp from './pages/MainApp'
import Download from './pages/Download'
import About from './pages/About'
import Footer from './components/Footer'

const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Rubik:400,700');
  @import url('https://fonts.googleapis.com/css?family=Montserrat:200,300,400');
`

const CustomRouter = styled(Router)`
  min-height: calc(100vh - 9em);
`

const App = () => {
    return (
      <Container>
        <Nav />
        <CustomRouter>
          <MainApp path="/" />
          <Download path="download" />
          <About path="about" />
        </CustomRouter>
        <Footer />
      </Container>
    );
  }

export default App;
