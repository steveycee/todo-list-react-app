import { useState, useRef } from "react";
import ToDoListInput from "./todo-list-input";
import ToDoListDisplay from "./todo-list-display";

import "./todo-list.css";

function ToDoList() {
  const [todoInputContent, setTodoInputContent] = useState("");
  const [todos, setTodos] = useState([]);

  let nextId = useRef(0);

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
      <ToDoListInput todos={todos} setTodos = {setTodos} nextId = {nextId} setTodoInputContent={setTodoInputContent} todoInputContent={todoInputContent} />
      <ToDoListDisplay todos={todos} removeListItem={removeListItem} markListItemAsDone={markListItemAsDone} />
    </div>
  );
}
export default ToDoList;
