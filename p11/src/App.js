import React from "react"
import TodoItem from "./ToDoItem"
import todosData from "./todosData"
import "./style.css";

function App() {
  const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)

    return (
        <div className="todo-list">
            <h1>Weiting's Practice To Do List</h1>
            <h2>Tuesday, January 28, 2020</h2>
            {todoItems}
        </div>
    )
}

export default App
