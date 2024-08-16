import { useState } from "react";
import "./todo-list-item.css";

let nextId = 0;

function TodoListItem({ handleRemoveListItem }) {
  const [todoInputContent, setTodoInputContent] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todoInputContent);
    console.log(todos);
    console.log("Form submitted");
  };

  return (
    <>
      <li className="listitem">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            role="textbox"
            type="text"
            placeholder="Enter text here"
            onChange={(e) => setTodoInputContent(e.target.value)}
          />
          <input
            type="submit"
            value="✓"
            onClick={() => {
              todos.push({
                id: nextId++,
                content: todoInputContent,
              });
            }}
          />
          <input
            type="button"
            value="X"
            onClick={() => {
              handleRemoveListItem();
            }}
          />
        </form>
      </li>
    </>
  );
}

export default TodoListItem;
