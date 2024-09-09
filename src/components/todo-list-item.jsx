import { useState } from "react";
import "./todo-list-item.css";

// let nextId = 0;

function TodoListItem({ handleRemoveListItem, handleSavingTodo }) {
  const [todoInputContent, setTodoInputContent] = useState("");
  // const [todos, setTodos] = useState([]);

  // // TODO: do handleSubmit and handleSavingTodo need to be different functions?
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   todos.push({
  //     id: nextId++,
  //     content: todoInputContent,
  //   });
  //   console.log(
  //     "handleSavingTodo function was called and pushed to the todos list. The todo's array length is: " +
  //       todos.length
  //   );
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSavingTodo();
    console.log(todoInputContent)
    console.log('handleSubmit has been called')
  }

  return (
    <>
      <li className="listitem">
        <form
          onSubmit={handleSubmit}
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
            }}
          />
          <p>You typed: {todoInputContent}</p>
          <input type="checkbox" name="listItemComplete"/>
          <label htmlFor="listItemComplete">Done?</label>
        </form>
      </li>
    </>
  );
}

export default TodoListItem;
