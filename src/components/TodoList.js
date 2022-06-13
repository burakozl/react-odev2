import { List } from '@material-ui/core'
import React from 'react'
import Todo from './Todo'

function Todolist({ todos, toggleComplete, removeTodo }) {
  return (
    <div>
      <List>
        {todos.map((todo, i )=> (
            <Todo 
            key={todo.id} 
            todo={todo} 
            toggleComplete={toggleComplete} 
            removeTodo={removeTodo}
            />
        ))}
      </List>
      <p>{todos.length} items left</p>
    </div>
  )
}

export default Todolist
