import React from "react"
import TodoItem from "./ToDoItem"
import todosData from "./todosData"
import "./style.css";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
        this.setState(prevState => {
          const updatedToDos = prevState.todos.map(todo => {
            if (todo.id === id) {
              return {
                ...todo,
                completed: !todo.completed
              }
            }
            return todo
          })
          return {
            todos: updatedToDos
          }
        })
      }

  render() {
    const todoItems = this.state.todos.map(item => <TodoItem
        key={item.id}
        item={item}
        handleChange={this.handleChange}
      />)

      return (
          <div className="todo-list">
              <h1>Weiting's Practice To Do List</h1>
              <h2>Tuesday, January 28, 2020</h2>
              {todoItems}
          </div>
      )
  }

}

export default App
