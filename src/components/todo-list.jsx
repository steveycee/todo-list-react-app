import { useState, useRef } from "react";
import "./todo-list.css";

function ToDoList() {
  const [todoInputContent, setTodoInputContent] = useState("");
  const [todos, setTodos] = useState([]);

  let nextId = useRef(0);

  const handleSavingListItem = (e) => {
    e.preventDefault();
    const newTodo = {
      id: nextId.current++,
      content: todoInputContent,
      status: true,
    };
    setTodos([...todos, newTodo]);
    console.log(
      "handleSavingListItem called with the following content: " +
        todoInputContent + " with the ID: " + newTodo.id + " and the status of: " + newTodo.status
    );
    setTodoInputContent("");
  };

  const removeListItem = id =>  {
    setTodos(todos.filter((todo) => todo.id !== id));
    console.log("removeListItem function called on id: " + id);

  }

  const markListItemAsDone = id =>  {
    console.log("Current status is: " + todos[id].status);
    todos[id].status = !todos[id].status;
    console.log("markListItemAsDone function called on id: " + id + " the status is now: " + todos[id].status);
  }

  return (
    <div className='flex-container'>
 			<h1>Todo List App</h1>
      <h2>Test ToDoList</h2>
      <form onSubmit={handleSavingListItem} className="flex-row border">
        <textarea
          type="text"
          value={todoInputContent}
          placeholder="Enter text here"
          onChange={(e) => setTodoInputContent(e.target.value)}
          required
        />
        <input type="submit" value="✓" className="form-submit-button" />
      </form>
      <p>TodoInputContent is: {todoInputContent}</p>
      <div className="todo-list-item">
        <ul>
          {todos.map((todos) => (
            <>
              <li key={todos.id} className="flex-row border">
                Todos is: {todos.content} with an id of {todos.id}
              </li>
              <button onClick={() => markListItemAsDone(todos.id)}>Done</button>
              <button onClick={() => removeListItem(todos.id)}>Remove</button>
              <br />
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default ToDoList;
