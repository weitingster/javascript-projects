import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 *
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 *
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 *
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
          firstName: "",
          lastName: "",
          age: "",
          gender: "",
          location: "",
          isDietVegan: false,
          isDietVegetarian: false,
          isDietLactose: false,
          isDietHalal: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
      const {name, value, type, checked} = event.target
      type === "checkbox" ?
          this.setState({
              [name]: checked
          })
      :
      this.setState({
          [name]: value
      })
    }

    render() {
        return (
            <main>
                <form>
                    <input
                      type="text"
                      value={this.state.firstName}
                      name="firstName"
                      placeholder="First Name"
                      onChange={this.handleChange}
                    />
                    <br />
                    <input
                      type="text"
                      value={this.state.lastName}
                      name="lastName"
                      placeholder="Last Name"
                      onChange={this.handleChange}
                    />
                    <br />
                    <input placeholder="Age"
                      type="text"
                      value={this.state.age}
                      name="age"
                      placeholder="Age"
                      onChange={this.handleChange}
                    />
                    <br />

                    {/* Create radio buttons for gender here */}
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={this.state.gender === "male"}
                      onChange={this.handleChange}
                    /> Male
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={this.state.gender === "female"}
                      onChange={this.handleChange}
                    /> Female
                    <input
                      type="radio"
                      name="gender"
                      value="Prefer Not To Say"
                      checked={this.state.gender === "Prefer Not To Say"}
                      onChange={this.handleChange}
                    /> Prefer not to say
                    <br />

                    {/* Create select box for location here */}
                    <select
                      value={this.state.location}
                      onChange={this.handleChange}
                      name="location"
                    >
                      <option value="Canada">Canada</option>
                      <option value="Costa Rica">Costa Rica</option>
                      <option value="Mexico">Mexico</option>
                      <option value="China">China</option>
                      <option value="Portugal">Portugal</option>
                      <option value="India">India</option>
                      <option value="Spain">Spain</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="France">France</option>
                    </select>
                    <br />

                    {/* Create check boxes for dietary restrictions here */}
                    <label>
                      <input
                        type="checkbox"
                        name="isDietVegan"
                        checked={this.state.isDietVegan}
                        onChange={this.handleChange}
                      /> Vegan
                      <input
                        type="checkbox"
                        name="isDietVegetarian"
                        checked={this.state.isDietVegetarian}
                        onChange={this.handleChange}
                      /> Vegetarian
                      <input
                        type="checkbox"
                        name="isDietLactose"
                        checked={this.state.isDietLactose}
                        onChange={this.handleChange}
                      /> Lactose
                      <input
                        type="checkbox"
                        name="isDietHalal"
                        checked={this.state.isDietHalal}
                        onChange={this.handleChange}
                      /> Halal
                      <br />
                    </label>

                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName} {/* First and last name here */}</p>
                <p>Your age: {this.state.age}{/* Age here */}</p>
                <p>Your gender: {this.state.gender}{/* Gender here */}</p>
                <p>Your destination: {this.state.location}{/* Destination here */}</p>
                <p>Your dietary restrictions:</p>
                    <p>Vegan: {this.state.isDietVegan ? "Yes" : "No"}</p>
                    <p>Vegetarian: {this.state.isDietVegetarian ? "Yes" : "No"}</p>
                    <p>Lactose: {this.state.isDietLactose ? "Yes" : "No"}</p>
                    <p>Halal: {this.state.isDietHalal ? "Yes" : "No"}</p>
            </main>
        )
    }
}

export default App
