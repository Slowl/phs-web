import React from 'react'
import styled from 'styled-components'

const Button = styled.a`
  display: inline-block;
  background-color: #0082cb;
  color: white;
  text-decoration: none;
  padding: 1em 2em;
  transition: .4s;

  :focus {
    outline: 0;
  }

  :hover {
    background-color: #0071b0 ;
  }
`

const Buttons = ({ url, quality }) => {

  return (
    <Button href={url} target="_blank" type="application/octet-stream" download>
      {quality}p
    </Button>
  )
}

export default Buttons
