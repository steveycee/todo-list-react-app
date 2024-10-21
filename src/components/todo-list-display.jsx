import "./todo-list.css";
import ToDoListItem from "./todo-list-item";


function ToDoListDisplay({ todos, setTodos }) {

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
    <div className="todo-list-item">
        <ul>
        {todos.map((todos) => (
            <ToDoListItem key={todos.id} todos = {todos} setTodos = {setTodos} removeListItem = {removeListItem} markListItemAsDone = {markListItemAsDone} />
        ))}
        </ul>
  </div>
  );
}
export default ToDoListDisplay;
