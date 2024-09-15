import { useState, useRef } from "react";
// import TodoListItem from "./todo-list-item";

function ToDoList() {
  const [todoInputContent, setTodoInputContent] = useState("");
  const [todos, setTodos] = useState([]);

  let nextId = useRef(0);

  const handleSavingListItem = (e) => {
    e.preventDefault();
    const newTodo = {
      id: nextId.current++,
      content: todoInputContent,
    };
    setTodos([...todos, newTodo]);
    console.log(
      "handleSavingListItem called with the following content: " +
        todoInputContent
    );
    setTodoInputContent("");
  };

  const removeListItem = id =>  {
    setTodos(todos.filter((todo) => todo.id !== id));
    console.log("removeListItem function called on id: " + id);

  }

  return (
    <>
      <h2>Test ToDoList</h2>
      <form onSubmit={handleSavingListItem}>
        <textarea
          type="text"
          value={todoInputContent}
          placeholder="Enter text here"
          onChange={(e) => setTodoInputContent(e.target.value)}
        />
        <input type="submit" value="✓" />
      </form>
      <p>TodoInputContent is: {todoInputContent}</p>
      <ul>
        {todos.map((todos) => (
          <>
            <li key={todos.id}>
              Todos is: {todos.content} with an id of {todos.id}
            </li>
            <button onClick={() => removeListItem(todos.id)}>Delete</button>
          </>
        ))}
      </ul>
    </>
  );
}
export default ToDoList;
