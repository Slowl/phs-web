import React from 'react'
import styled from 'styled-components'
import { Link } from "@reach/router";

const NavContainer = styled.div`
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
    text-align: center;

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
      <Link to="/"> HOME </Link>
      <Link to="download"> DOWNLOAD THE APP</Link>
      <Link to="about"> ABOUT </Link>
    </NavContainer>
  )
}

export default Nav
