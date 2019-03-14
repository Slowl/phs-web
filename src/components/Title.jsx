import React from 'react'
import styled from 'styled-components'

const TitleContainer = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Rubik:400,700');
  font-family: 'Rubik', sans-serif;
  display: block;
  color: white;
  font-size: 92px;
  font-weight: 400;
  text-align: center;
  width: 90%;
  padding: .2em;
  margin: auto;

  span {
    background-color: #ff9900;
    color: black;
    padding: .1em;
    border-radius: 10px;
  }

  @media screen and (max-width: 45em) {
      font-size: 72px;
      width: 100%;
  }

`

const Title = () => {

  return (
    <TitleContainer> WH<span>AT ?</span> </TitleContainer>
  )
}

export default Title
