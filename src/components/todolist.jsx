import { useState } from "react";
import ListItem from "./listitem";

function ToDoList() {
  const [items, setItems] = useState([]);

  const addListItem = () => {
    setItems([...items, {}]);
    console.log(items.length);
  };

  return (
    <>
      <h2>Test ToDoList</h2>
      <button onClick={addListItem}>Add list item</button>
      {items.map((_, index) => (
        <ListItem key={index} />
      ))}
    </>
  );
}

export default ToDoList;
