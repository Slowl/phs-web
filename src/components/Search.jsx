import React from 'react'
import styled from 'styled-components'
import SearchIcon from '../icons/SearchIcon'
import { TailSpin } from 'svg-loaders-react'

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2em;
`

const InputBox = styled.input`
  font-family: 'Montserrat', sans-serif;
  background-color: #1c1c1c;
  border: 1px solid transparent;
  border-right-color: #ff9900;
  padding: .7em;
  width: 40%;
  transition: .4s;
  font-size: 16px;
  font-weight: 400;
  color: white;
  letter-spacing: 1px;
  border-radius: 10px 0 0 10px;

  :focus {
    outline: 0;
    border-top-color: #ff9900;
    border-left-color: #ff9900;
    border-bottom-color: #ff9900;
  }

  ::placeholder {
    color: rgba(255,255,255,.7);
    text-align: center;
  }

  @media screen and (max-width: 45em) {
      width: 90%;
      font-size: 14px;
  }
`

const SearchBtn = styled.div`
  cursor: pointer;
  padding: .7em 1em;
  background-color: #ff9900;
  transition: .4s;
  border-radius: 0 10px 10px 0;

  :hover {
    background-color: #dd8502 ;
  }
`

const Search = ({ onClick, onChange, onKeyPress, status }) => {

  return (
    <SearchContainer>
      <InputBox onChange={onChange} onKeyPress={onKeyPress} placeholder="Paste your innocent link here ..."/>
      <SearchBtn onClick={onClick}> {status ? <TailSpin width="25px" height="25px" fill="black" /> : <SearchIcon width="25px" height="25px" /> } </SearchBtn>
    </SearchContainer>
  )
}

export default Search
