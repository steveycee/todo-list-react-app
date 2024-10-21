import "./todo-list.css";

function ToDoListItem({ todos, removeListItem, markListItemAsDone }) {

    return (
            <div>
                <li key={todos.id} className="flex-row border">
                    Todos is: {todos.content} with an id of {todos.id}
                </li>
                <button onClick={() => markListItemAsDone(todos.id)}>Done</button>
                <button onClick={() => removeListItem(todos.id)}>Remove</button>
                <br />
            </div>
  );
}

export default ToDoListItem;
