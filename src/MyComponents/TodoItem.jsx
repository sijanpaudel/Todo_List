import React from 'react'

const TodoItem = ({todo, onDelete}) => {
  return (
    <div>
      <p>{todo.title}</p>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
      <hr />
    </div>
  )
}

export default TodoItem
