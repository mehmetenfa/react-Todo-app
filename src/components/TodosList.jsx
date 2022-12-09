import { AiFillCheckCircle, AiFillEdit, AiFillDelete } from "react-icons/ai";
import React from "react";

const Todo = ({ todos, setTodos, setEditTodo }) => {
  const handleCompleted = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="bg-slate-600 flex flex-col items-center h-[30rem] w-[26rem] ml-[11rem] mt-[5rem] rounded-xl">
      {todos.map((todo) => (
        <li className="flex m-[1.2rem]" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`w-[15rem] bg-slate-500 p-2 rounded-xl placeholder-white ${todo.completed ? "completed" : ""}`}
            onChange={(event) => event.preventDefault()}
          />
          <div className="ml-3">
            <button
              className="text-3xl cursor-pointer hover:scale-75"
              onClick={() => handleCompleted(todo)}
            >
              <AiFillCheckCircle />
            </button>
            <button
              className="text-3xl cursor-pointer hover:scale-75"
              onClick={() => handleEdit(todo)}
            >
              <AiFillEdit />
            </button>
            <button
              className="text-3xl cursor-pointer hover:scale-75"
              onClick={() => handleDelete(todo)}
            >
              <AiFillDelete />
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default Todo;
