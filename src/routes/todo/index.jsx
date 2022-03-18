import React from 'react'
import { Link, Outlet } from "react-router-dom";
import Heading from '../../components/layout/heading'
import todoJson from "../../libs/todoData";

function Todo() {
  const todos = todoJson;
  return (
    <div>
      <Heading title="todos" />
      <section>
        {todos.map((todo) => {
          return (
            <Link to={`/todos/${todo.id}`} key={todo.id}>
              {todo.title}
            </Link>
          );
        })}
      </section>

      <section>
        <Outlet />
      </section>
    </div>
  )
}

export default Todo