import { useState } from "react";
import "./todo-list-item.css";

function TodoListItem({ handleRemoveListItem }) {
	const [listItemsContent, setListItemsContent] = useState([""]);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(value);
	};

	return (
		<>
			<li className="listitem">
				<form>
					<input
						onSubmit={handleSubmit}
						type="text"
						placeholder="Enter text here"
						onChange={(e) => setListItemsContent(e.target.value)}
					/>
				</form>
				<button>✓</button>
				<button
					onClick={() => {
						handleRemoveListItem();
					}}
				>
					X
				</button>
			</li>
		</>
	);
}

export default TodoListItem;
