import React from 'react'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      hexText: "#BDD2C8"
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    let colorPicker = ["#EC694C", "#ECCF4C", "#C7EC4C", "#4CECB6", "#4CB6EC", "#966BEE", "#E274D5", "#E2748B"];
    let randomColor = colorPicker[Math.floor(Math.random() * colorPicker.length)];
    document.body.style.background = randomColor
    console.log(randomColor)
    this.setState({hexText: randomColor})
  }

//   hexCode () {
//     let colorPicker = ["#EC694C", "#ECCF4C", "#C7EC4C", "#4CECB6", "#4CB6EC", "#966BEE", "#E274D5", "#E2748B"];
//     let randomColor = colorPicker[Math.floor(Math.random() * colorPicker.length)];
//     document.body.style.background = randomColor
//     console.log({randomColor}) //the colour HEX code shows up in console.
// }

  render() {
    return (
      <div className="grid">
        <h1>My background colour changes to a random colour! </h1>
        <h2>HEX: {this.state.hexText}</h2>
        <button onClick={this.handleClick} >Click Me</button>
      </div>
    )
  }
}

export default App;
