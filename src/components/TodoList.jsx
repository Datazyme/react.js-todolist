import React from 'react'

export default function TodoList() {
  let todos = [
    'Go to gym',
    'Eat more fruits',
    'Go for a walk'
  ]
  return (
    <ul className='main'>
      {todos.map((todo, todoIndex) => {
        return (
          <li className='todoItem' key={todoIndex}>{todo}
            <i class="fa-solid fa-pen-to-square"></i>
          </li>
        )
      })}
    </ul>
  )
}
