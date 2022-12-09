import React from "react";
import {v4 as uuidv4} from "uuid";

const Form = ({ input, setInput, todos, setTodos }) => {
  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, {id: uuidv4(), title: input, completed: false}])
    setInput("")
  }

  return (
    <div className=" w-screen h-screen flex flex-col items-center">
      <form className="mt-[5rem] w-[27rem] h-[30rem]" onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Enter a Todo..."
          className="w-[15rem] bg-slate-500 p-2 rounded-xl placeholder-white"
          value={input}
          required
          onChange={onInputChange}
        />
        <button
          className="bg-cyan-600 text-white w-[5rem] p-2 rounded-xl ml-[4rem]"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
