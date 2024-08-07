import { useState } from "react";
import TodoListItem from "./todo-list-item";

function ToDoList() {
	const [items, setItems] = useState([]);

	const addListItem = () => {
		setItems([...items, {}]);
		console.log("added list item");
	};

	const removeListItem = (index) => {
		setItems((prevItems) => prevItems.filter((_, i) => i !== index));
		console.log("removeListItem");
	};

	return (
		<>
			<h2>Test ToDoList</h2>
			<button onClick={addListItem}>Add list item</button>
			{items.map((_, index) => (
				<TodoListItem
					key={index}
					handleRemoveListItem={() => removeListItem(index)}
				/>
			))}
		</>
	);
}

export default ToDoList;
