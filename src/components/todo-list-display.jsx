import "./todo-list.css";

function ToDoListDisplay({ todos, removeListItem, markListItemAsDone }) {
  return (
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
  );
}
export default ToDoListDisplay;
