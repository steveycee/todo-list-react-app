import "./todo-list.css";
import ToDoListItem from "./todo-list-item";


function ToDoListDisplay({ todos, removeListItem, markListItemAsDone }) {
  return (
    <div className="todo-list-item">
        <ul>
        {todos.map((todos) => (
            <ToDoListItem key={todos.id} todos={todos} removeListItem={removeListItem} markListItemAsDone={markListItemAsDone} />
        ))}
        </ul>
  </div>
  );
}
export default ToDoListDisplay;
