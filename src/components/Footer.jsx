import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
  text-align: center;
  color: white;

  a {
      color: black;
      text-decoration: none;
      font-weight: 400;
      padding: .3em;
      background-color: #e78a00;
      border-radius: 4px;

      :focus {
        outline: 0;
      }
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      Made for fun by <a href="https://hedik.fr/" target="_blank"> HediK </a>
    </FooterContainer>
  )
}

export default Footer
