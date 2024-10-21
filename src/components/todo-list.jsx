import { useState, useRef } from "react";
import ToDoListInput from "./todo-list-input";
import ToDoListDisplay from "./todo-list-display";

import "./todo-list.css";

function ToDoList() {
  const [todoInputContent, setTodoInputContent] = useState("");
  const [todos, setTodos] = useState([]);

  let nextId = useRef(0);

  return (
    <div className='flex-container'>
 			<h1>Todo List App</h1>
      <h2>Test ToDoList</h2>
      <ToDoListInput todos = {todos} setTodos = {setTodos} nextId = {nextId} setTodoInputContent={setTodoInputContent} todoInputContent={todoInputContent} />
      <ToDoListDisplay todos = {todos} setTodos = {setTodos} />
    </div>
  );
}
export default ToDoList;
