import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  return (
    <form
      className="bg-slate-700 mt-[5rem] ml-[7rem] flex items-center w-[35rem] h-[5rem] rounded-xl"
      onSubmit={onFormSubmit}
    >
      <input
        type="text"
        placeholder="Enter a Todo..."
        className="w-[16rem] ml-[4rem] bg-slate-500 p-2 rounded-xl placeholder-white"
        value={input}
        required
        onChange={onInputChange}
      />
      <button
        className="bg-cyan-600 text-white w-[6rem] p-2 rounded-xl ml-[4rem] hover:scale-90"
        type="submit"
      >
        {editTodo ? "UPDATE" : "ADD"}
      </button>
    </form>
  );
};

export default Form;
