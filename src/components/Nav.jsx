import React from 'react'
import styled from 'styled-components'
import { Link } from "@reach/router";

const NavContainer = styled.div`
@import url('https://fonts.googleapis.com/css?family=Rubik:400,700');
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  display: flex;
  justify-content: flex-end;
  letter-spacing: 3px;

  a {
    color: white;
    text-decoration: none;
    padding: 1em;
    transition: .4s;
    font-size: 18px;

    :hover {
      background-color:#e78a00;
      color: black;
    }

    :focus {
      outline: none;
    }
  }
`

const Nav = () => {
  return (
    <NavContainer>
      <Link to="home"> HOME </Link>
      <Link to="about"> ABOUT </Link>
    </NavContainer>
  )
}

export default Nav
