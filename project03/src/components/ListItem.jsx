import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

const ListItem = ({item}) => {
    const{handleTodoDelete,handleTodoToggle}= useContext(TodoContext)
  return (
    <div className='list-item'>
      <li>
        <input type='checkbox' checked={item.completed} onChange={()=>{handleTodoToggle(item.num)}}></input>
        <label style={{
            textDecoration : item.completed ? 'line-through': 'none'
        }}>
            <span className='todo-text'>{item.text}</span>
        </label>
        <button onClick={()=>{handleTodoDelete(item.num)}}>Delete</button>
      </li>
    </div>
  )
}

export default ListItem
