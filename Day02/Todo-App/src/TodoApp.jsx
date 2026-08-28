import { useState } from "react";
import {
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiCheck,
} from "react-icons/fi";

import "./App.css";

const TodoApp = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // CREATE / UPDATE
  const add = () => {
    if (input.trim() === "") {
      setError("Please enter a todo");
      return;
    }

    setError("");

    // UPDATE
    if (editIndex !== null) {
      const updatedTodos = todos.map((todo, index) =>
        index === editIndex ? input.trim() : todo
      );

      setTodos(updatedTodos);
      setEditIndex(null);
      setInput("");

      return;
    }

    // CREATE
    setTodos([...todos, input.trim()]);
    setInput("");

    console.log("Added:", input);
  };

  // DELETE
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter(
      (_, todoIndex) => todoIndex !== index
    );

    setTodos(updatedTodos);

    if (editIndex === index) {
      setEditIndex(null);
      setInput("");
    }
  };

  // EDIT
  const editTodo = (index) => {
    setInput(todos[index]);
    setEditIndex(index);
    setError("");
  };

  return (
    <div className="todo-page">
      <div className="todo-container">

        {/* Header */}
        <header className="todo-header">
          <h1>Todo App</h1> 
        </header>

        {/* Add / Update Form */}
        <section className="todo-form-card">

          <div className="todo-input-group">

            <input
              type="text"
              name="text"
              id="text"
              placeholder="What do you need to do?"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setError("");
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  add();
                }
              }}
            />

            <button onClick={add}>
              {editIndex !== null ? (
                <>
                  <FiEdit2 />
                  Update
                </>
              ) : (
                <>
                  <FiPlus />
                  Add Task
                </>
              )}
            </button>

          </div>

          {error && (
            <p className="todo-error">
              {error}
            </p>
          )}

        </section>

        {/* List Header */}
        <div className="todo-list-header">

          <div>
            <h2>My Tasks</h2>
            <p>Your current tasks</p>
          </div>

          <span className="todo-count">
            {todos.length}{" "}
            {todos.length === 1 ? "Task" : "Tasks"}
          </span>

        </div>

        {/* Todo List */}
        <section className="todo-list">

          {todos.length === 0 ? (

            <div className="empty-state">

              <div className="empty-icon">
                <FiCheck />
              </div>

              <h3>No tasks yet</h3>

              <p>
                Add your first task above to get started.
              </p>

            </div>

          ) : (

            todos.map((todo, index) => (

              <div
                className="todo-item"
                key={index}
              >

                <div className="todo-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="todo-content">
                  {todo}
                </div>

                {/* Action Buttons */}
                <div className="todo-actions">

                  {/* Edit */}
                  <button
                    className="edit-btn"
                    onClick={() => editTodo(index)}
                    title="Edit todo"
                  >
                    <FiEdit2 />
                  </button>

                  {/* Delete */}
                  <button
                    className="delete-btn"
                    onClick={() => deleteTodo(index)}
                    title="Delete todo"
                  >
                    <FiTrash2 />
                  </button>

                </div>

              </div>

            ))

          )}

        </section>

      </div>
    </div>
  );
};

export default TodoApp;

