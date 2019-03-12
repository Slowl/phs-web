import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const MainApp = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('https://cors-anywhere.herokuapp.com/https://fr.pornhub.com/view_video.php?viewkey=ph5c662b0e5bcd6')
    .then((response) => response.text())
    .then((sourceCode) => {
      setData(sourceCode)
    })
  }, []);

  const uglyShit = data.split(`"mediaDefinitions":`)[1]

  if (uglyShit) {
    const anotherShit = uglyShit.split("}]")
    const yes = anotherShit[0] + "}]"
    console.log(JSON.parse(yes))
  }

  return (
    <div>

    </div>
  )
}

export default MainApp
