import React, { useState } from 'react'
import styled from 'styled-components'
import Search from '../components/Search'
import Buttons from '../components/Buttons'
import Title from '../components/Title'

const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:200,300,400');
  width: 100%;
  padding-top: 5em;
  overflow-x: hidden;
  font-family: 'Montserrat', sans-serif;
`

const SourceContainer = styled.div`
  color: white;
  text-align:center;
  padding-top: 2em;

  .quality {
    padding: 1em;
    letter-spacing: 1px;
    font-size: 18px;
  }
`
const ErrorContainer = styled.div`
  color: white;
  background-color: #d54b4b;
  padding: 1em;
  width: 40%;
  margin: .2em auto;
  text-align:center;
  letter-spacing: 1px;
  font-size: 18px;

  @media screen and (max-width: 45em) {
      font-size: 16px;
      width: 80%;
  }
`

const MainApp = () => {
  const [data, setData] = useState('');
  const [inputVal, changeVal] = useState('');
  const [loading, updateStatus] = useState(false);
  const [error, updateError] = useState(false);
  // https://fr.pornhub.com/view_video.php?viewkey=ph5c05d137bb057

  const SearchFunc = () => {
    const sourceRequest = async () => {
        updateError(false)
        updateStatus(true)
        const response = await fetch(`https://cors-anywhere.herokuapp.com/${inputVal}`)
        const source = await response.text()
        const uglySource = source.split(`"mediaDefinitions":`)[1]
        const lessUglySource = uglySource.split("}]")
        const formatedSource = lessUglySource[0] + "}]"
        const preciousData = JSON.parse(formatedSource)
        updateStatus(false)
        return preciousData
    }

    sourceRequest()
    .then(sourceCode => setData(sourceCode))
    .catch(error => {
      updateStatus(false)
      updateError(true)
      console.log(error)
    })
  }

  const handleChange = (e) => {
    const formatedvalue = e.target.value.trim()
    changeVal(formatedvalue)
  }

  const handleKeyPress = (e) => {
  if (e.key === "Enter") {
    SearchFunc()
  }
}
  console.log(typeof(data))
  return (
    <div>

      <Container>
        <Title />
        <Search onClick={SearchFunc} onChange={handleChange} onKeyPress={handleKeyPress} status={loading} />
        <SourceContainer>

          {error ? (<ErrorContainer> An error occured, probably caused by the link you provided </ErrorContainer>) : (<span></span>)}

          {data && (
            <div className="quality">
              Select the quality :
            </div>
          )}

          {!!data && (
            data.map(
              (datas, key) => (
                datas.format === "mp4" && (
                  <Buttons key={key} url={datas.videoUrl} quality={datas.quality} />
                )
              )
            )
          )}
        </SourceContainer>
      </Container>

    </div>
  )
}

export default MainApp
