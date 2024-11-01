import "./todo-list.css";

function ToDoListItem({ todos, removeListItem, markListItemAsDone, status }) {

  const itemStyle = {
    backgroundColor: status ? 'lightgreen' : 'lightcoral', // Change color based on status
  };

    return (
            <div>
                <li key={todos.id} className="flex-row border" style={itemStyle}>
                    Todos is: {todos.content} with an id of {todos.id} and a status of {status.toString()}  
                </li>
                <button onClick={() => markListItemAsDone(todos.id)}>Done</button>
                <button onClick={() => removeListItem(todos.id)}>Remove</button>
                <br />
            </div>
  );
}

export default ToDoListItem;
