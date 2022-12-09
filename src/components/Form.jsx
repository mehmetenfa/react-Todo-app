import React from "react";

const Form = () => {
  return (
    <div className="border border-red-700 w-screen h-screen flex flex-col items-center">
      <form className="mt-[5rem]">
        <input
          type="text"
          placeholder="Enter a Todo..."
          className="task-input"
        />
        <button className="button-add" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
