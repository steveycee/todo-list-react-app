import { useState } from "react";
import TodoListItem from "./todo-list-item";

function ToDoList() {
  const [items, setItems] = useState([]);

  const addListItem = () => {
    setItems([...items, {}]);
    console.log("addListItem function called.");
  };

  const removeListItem = (index) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
    console.log("removeListItem function called.");
  };

  const consoleOutLonelyIsland = () => {
    console.log("I run NY");
  };

  return (
    <>
      <h2>Test ToDoList</h2>
      <button onClick={addListItem}>Add list item</button>
      {items.map((_, index) => (
        <TodoListItem
          key={index}
          handleRemoveListItem={() => removeListItem(index)}
          handleLonelyIsland={() => consoleOutLonelyIsland(index)}
        />
      ))}
    </>
  );
}

export default ToDoList;
