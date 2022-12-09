import {AiFillCheckCircle, AiFillEdit, AiFillDelete} from "react-icons/ai"
import React from "react";

const Todo = ({ todos, setTodos }) => {
  return (
    <div className="bg-slate-600 flex flex-col items-center h-[30rem] w-[26rem] ml-[11rem] mt-[5rem] rounded-xl">
      {todos.map((todo) => (
        <li className="flex m-[1.2rem]" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className="w-[15rem] bg-slate-500 p-2 rounded-xl placeholder-white"
            onChange={(event) => event.preventDefault()}
          />
          <div className="ml-3">
            <button className="text-3xl">
              <AiFillCheckCircle />
            </button>
            <button className="text-3xl">
              <AiFillEdit />
            </button>
            <button className="text-3xl">
              <AiFillDelete />
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default Todo;
