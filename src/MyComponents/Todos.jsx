import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
  let myStyle={
    minHeight:"54vh",
    marginBottom:'20px'
  }
  
  return (
    <div className='container' style={myStyle}>
      <h3 className='my-3'>Todos List</h3>
      {props.todos.length===0?"No Todos to display":props.todos.map((item)=>{
      return <TodoItem todo={item} key={item.sno} onDelete={props.onDelete}/>
      })}
    </div>
  )
}

export default Todos
