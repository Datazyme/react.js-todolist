import React from 'react'
import { useState, useEffect } from "react"

export default function TodoCard(props) {
  const {children, handleDeleteTodo, index, handleEditTodo} = props
  const [checked, setChecked] = useState(false);


  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <li className='todoItem'>
      {children}
      <div className='actionsContainer'>
        <input type="checkbox" checked={checked} onChange={handleChange}></input>
        <button onClick={() => {handleEditTodo(index)}}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => {
          handleDeleteTodo(index)
        }}>
          <i className="fa-solid fa-trash"></i>
        </button>
       
       
      </div>
    
  </li>
  )
}
