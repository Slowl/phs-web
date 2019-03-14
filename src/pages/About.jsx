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
  width: 40%;
  margin: auto;
  overflow-y: auto;

  @media screen and (max-width: 45em) {
    width: 90%;
  }
`

const Paragraph = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: rgba(255,255,255, .9);
  font-weight: 300;
  padding: .5em;
  font-size: 22px;
  line-height: 1.3;

  span {
    color: white;
    display: block;
    font-weight: 400;
    :after {
      display: block;
      margin: .2em 0 .5em;
      content: " ";
      width: 100px;
      height: 1px;
      background-color:#e78a00;
    }
  }

  b {
    font-weight: 700;
  }

  @media screen and (max-width: 45em) {
    font-size: 18px;
  }
`

const About = () => {
  return (
    <Container>
      <Title>
        What's PHS ?
      </Title>
      <Desc>
        <Paragraph>

          The acronym for <b>Pornhub Source</b>, it's a tool that helps you download Pornhub (community) videos when you can't simply "long press" / "right click" on the video.
        </Paragraph>
        <Paragraph>
          <span>How to use ?</span>
          - Go on your favorite Pornhub video, copy the link from the address bar, and paste it here.
          <div>- Then "long press / right click" on the quality you want and save the video.</div>
          <div>- Or click on it and after you know what to do.</div>
        </Paragraph>
        <Paragraph>
          <span>Why the name "PHS ?"</span>
          Because I didn't want someone to ask me what I was working on by watching my screens, and seeing something like "Pornhub Source".
          <div>Even for you when you'll use it, nobody will ask questions.
          If they do, it's because they recognized Pornhub colors and therefore, they know that you know that they know.</div>
        </Paragraph>
      </Desc>
    </Container>
  )
}

export default About
