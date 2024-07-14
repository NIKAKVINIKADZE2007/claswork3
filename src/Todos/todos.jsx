import React from 'react';
import style from './todo.module.css';
const Todos = (props) => {
  return (
    <>
      <h1>Todos</h1>
      <ul>
        {props.todos.map((todo) => {
          return (
            <li className={todo.completed ? style.completed : ''} key={todo.id}>
              {todo.text}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Todos;
