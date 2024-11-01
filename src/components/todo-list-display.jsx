import React, { useEffect } from "react";
import "./todo-list.css";
import ToDoListItem from "./todo-list-item";


function ToDoListDisplay({ todos, setTodos }) {

  const removeListItem = id =>  {
    setTodos(todos.filter((todo) => todo.id !== id));
    console.log("removeListItem function called on id: " + id);
  }
  
  // const markListItemAsDone = id =>  {
  //   let todo = todos.find(todo => todo.id === id);
  //   todo.status = !todo.status;
  //   console.log('markListItemAsDone called on todo with an id of ' + todo.id + '. The status is: ' + todo.status)
  // }

  const markListItemAsDone = id => {
    setTodos(todos.map(todo => {
        if (todo.id === id) {
            return { ...todo, status: !todo.status };
        }
        console.log("markListItemAsDone function called on id: " + id + " The status is: " + todo.status);
        return todo;
    }));
  }

  return (
    <div className="todo-list-item">
        <ul>
        {todos.map((todos) => (
            <ToDoListItem key={todos.id} todos = {todos} setTodos = {setTodos} removeListItem = {removeListItem} markListItemAsDone = {markListItemAsDone} status={todos.status} />
        ))}
        </ul>
  </div>
  );
}
export default ToDoListDisplay;
