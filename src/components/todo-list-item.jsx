import { useState } from "react";
import "./todo-list-item.css";

let nextId = 0;

function TodoListItem({ handleRemoveListItem, handleLonelyIsland }) {
  const [todoInputContent, setTodoInputContent] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit function called.");
  };

  const handleSavingTodo = () => {
    todos.push({
      id: nextId++,
      content: todoInputContent,
    });
    console.log("handleSavingTodo function called.");
  };

  return (
    <>
      <li className="listitem">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <textarea
            type="text"
            placeholder="Enter text here"
            onChange={(e) => setTodoInputContent(e.target.value)}
          />
          <input
            type="submit"
            value="✓"
            onClick={() => {
              handleSavingTodo();
            }}
          />
          <input
            type="button"
            value="X"
            onClick={() => {
              handleRemoveListItem();
              handleLonelyIsland();
            }}
          />
        </form>
      </li>
    </>
  );
}

export default TodoListItem;
