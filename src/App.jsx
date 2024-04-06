import { useState, useEffect } from "react"
import Todoinput from "./components/Todoinput"
import TodoList from "./components/TodoList"


function App() {
 
  const [todos, setTodos] = useState([
  ])

  const [todoValue, setTodoValue] = useState('')

  

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }

  //expects new todo as a new array
  function handleAddTodos(newTodo) {
    //console.log(newTodo)
    if (newTodo.length < 4) {
      return
    } else {
      const newTodoList = [...todos, newTodo] //spreads out old todos and adds new todo on the end
      persistData(newTodoList)
      setTodos(newTodoList) //passes new list from above, repaints DOM
    }

  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }


  useEffect(() => {
    if(!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
      
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
    <>
      <Todoinput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos}/>
    </>
  )
}

export default App
