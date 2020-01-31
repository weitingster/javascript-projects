import React from "react"
import './App.css'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }

    render() {
        let stateBtn = this.state.isLoggedIn ? "LOG ME OUT" : "LOG ME IN"
        let textDisplay = this.state.isLoggedIn ? "I'm in a logged in state. Please log me out" : "I'm in a logged out state. Please log me back in!"

        return(
            <div>
                <p>This project is to display the log in and log out states of a user. Great reference for later projects!</p>
                <h1>{textDisplay}</h1>
                <button onClick={this.handleClick}>{stateBtn}</button>
            </div>
        )
    }
}

export default App
