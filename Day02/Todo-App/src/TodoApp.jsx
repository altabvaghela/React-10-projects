import { useState } from "react";

const TodoApp = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const add = () => {
    if (input.trim() === "") {
      setError("Please enter a todo");
      return;
    }
    setError();
    console.log(input);
  };
  return (
    <>
      <input
        type="text"
        name="text"
        id="text"
        placeholder="Enter any text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={add}>Add</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
};
export default TodoApp;
