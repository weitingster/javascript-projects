import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleClickDecrease = this.handleClickDecrease.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            return {
                count: prevState.count +1
            }
        })
    }

    handleClickDecrease() {
    this.setState(prevState => {
        return {
            count: prevState.count -1
        }
    })
    }

    render() {
        return (
          <div>
            <div className="counter-card">
              <h1>Counter:
              <br />
              <br />
              {this.state.count}</h1>
              <button onClick={this.handleClick}>Click me (+1)!</button>
              <button onClick={this.handleClickDecrease}>Click me (-1)!</button>
            </div>
            <p>Weiting's practice project.</p>
            <p>See more on www.wontosa.com/projects.</p>
            <p>Made with ♥ in 2020.</p>
          </div>
        )
    }
}


export default App
