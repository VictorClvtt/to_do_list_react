import React from 'react'

const Todo = ({todo, removeToDo, completeToDo}) => {
  return (
    <div className='todo' style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
            <div className='content'>
              <p>{todo.text}</p>
              <p className='category'>({todo.category})</p>
            </div>
            <div className='opts'>
              <button className='complete' onClick={() => completeToDo(todo.id)}>Completar</button>
              <button className='remove' onClick={() => removeToDo(todo.id)}>X</button>
            </div>
          </div>
  )
}

export default Todo