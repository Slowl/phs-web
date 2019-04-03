import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding-top: 2.5em;
  color: white;
  font-family: 'Rubik', sans-serif;
`
const Title = styled.div`
  text-align: center;
  font-size: 62px;
  :after {
    display: block;
    margin: .3em auto;
    content: " ";
    width: 200px;
    height: 3px;
    background-color:#e78a00;
  }

  @media screen and (max-width: 45em) {
      font-size: 32px;
      :after {
        width: 100px;
      }
  }
`
const Desc = styled.div`
  max-height: 60vh;
  text-align:left;
  margin: auto;
  text-align: center;
`
const Paragraph = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: rgba(255,255,255, .9);
  font-weight: 400;
  padding: .3em;
  font-size: 22px;

  @media screen and (max-width: 45em) {
    font-size: 18px;
  }
`

const DownloadButton = styled.a`
  font-family: 'Rubik', sans-serif;
  display: block;
  color: white;
  text-decoration: none;
  font-size: 20px;
  letter-spacing: 1px;
  text-align: center;
  border: 2px solid #e78a00;
  width: 17%;
  padding: 1em;
  margin: 3em auto 8em;
  border-radius: 10px;
  transition: .5s;

  :hover {
    color: #090909;
    background-color: #e78a00;
    border: 2px solid #090909;
  }
  :focus {
    outline: 0;
  }

  @media screen and (max-width: 45em) {
    font-size: 18px;
    letter-spacing: 1px;
    width: 60%;
  }
`

const ImgContainer = styled.div`
  padding: 2.5em 0 2.5em 0;
  overflow: hidden;
  background-color: #0e0d0d;
  width: 100%;
  display: flex;
  justify-content: center;

  img {
    margin: 1em;
    width: 20%;
    height: 20%;
    border: 3px solid #202020;
    border-radius: 15px;
  }

  @media screen and (max-width: 45em) {
    padding: 1em 0 1em 0;
    flex-direction: column;
    align-items: center;

    img {
      margin: 1em;
      width: 70%;
      height: 70%;
      border: 3px solid #202020;
      border-radius: 15px;
    }
  }
`

const Download = () => {
  return (
    <Container>
      <Title>Why an App ?</Title>
      <Desc>
        <Paragraph>
          - Rapid access at anytime
        </Paragraph>
        <Paragraph>
          - Easy direct download
        </Paragraph>
        <Paragraph>
          - Integrated Pornhub navigator
        </Paragraph>
        <Paragraph>
          - Incognito mode by default
        </Paragraph>
        <Paragraph>
          - A clean web browser history
        </Paragraph>
      </Desc>
      <DownloadButton href="https://hedik.fr/apk/phs-app.apk" download>Download for Android</DownloadButton>
      <ImgContainer>
        <img src="https://i.ibb.co/b5LmJsD/app.png" alt="homepage" />
        <img src="https://i.ibb.co/gMzZgzV/app-link.png" alt="linked" />
        <img src="https://i.ibb.co/NVDPcvM/browser.png" alt="browser" />
        <img src="https://i.ibb.co/1MFQWMp/about.png" alt="about" />
      </ImgContainer>
    </Container>
  )
}

export default Download
