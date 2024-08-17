import { useState } from "react";
import "./todo-list-item.css";

let nextId = 0;

function TodoListItem({ handleRemoveListItem, handleLonelyIsland }) {
  const [todoInputContent, setTodoInputContent] = useState("");
  const [todos, setTodos] = useState([]);

  // TODO: do handleSubmit and handleSavingTodo need to be different functions?
  const handleSubmit = (e) => {
    e.preventDefault();
    todos.push({
      id: nextId++,
      content: todoInputContent,
    });
    console.log(
      "handleSavingTodo function was called and pushed to the todos list. The todo's array length is: " +
        todos.length
    );
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
          <input type="submit" value="✓" />
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
