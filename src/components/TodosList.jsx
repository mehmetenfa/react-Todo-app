import React from "react";

const Todo = ({ todos, setTodos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <li className="todolist" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className="list"
            onChange={(event) => event.preventDefault()}
          />
        </li>
      ))}
    </div>
  );
};

export default Todo;
