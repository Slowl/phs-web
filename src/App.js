import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    data: "",
  }
  componentDidMount(){
    fetch('https://cors-anywhere.herokuapp.com/https://fr.pornhub.com/view_video.php?viewkey=ph5c662b0e5bcd6')
    .then((response) => response.text())
    .then((data) => {
      this.setState({ data: data });
    })
  }

  render() {
    const result = this.state.data
    const uglyShit = result.split(`"mediaDefinitions":`)[1]

    if (uglyShit) {
      const anotherShit = uglyShit.split("}]")
      const yes = anotherShit[0] + "}]"
      console.log(JSON.parse(yes))
    }


    return (
      <div className="App">
        {uglyShit}
      </div>
    );
  }
}

export default App;
