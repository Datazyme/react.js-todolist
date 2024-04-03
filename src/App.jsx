import { useState } from "react"
import TodoInput from "./components/Todoinput"
import TodoList from "./components/TodoList"


function App() {
 
  const [todos, setTodos] = useState([
    'Go to gym',
    'Eat more fruits',
    'Go for a walk'
  ])

  //expects new todo as a new array
  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo] //spreads out old todos and adds new todo on the end
    setTodos(newTodoList) //passes new list from above, repaints DOM
  }

  function handleDeleteTodo(index) {

  }

  function handleEditTodo(index) {
    
  }

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos}/>
      <TodoList todos={todos}/>
    </>
  )
}

export default App
