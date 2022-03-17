import React from 'react'
import {useParams} from "react-router-dom"

function TodoItems() {
    const params = useParams();
  return (
    <div>This is one todo item {params.todoId}</div>
  )
}

export default TodoItems