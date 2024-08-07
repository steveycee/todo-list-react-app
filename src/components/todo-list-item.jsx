import { useState } from "react";
import "./todo-list-item.css";

function TodoListItem({ handleRemoveListItem }) {
	const [listItemsContent, setListItemsContent] = useState([]);

	return (
		<>
			<li className="listitem">
				<form>
					<input
						type="text"
						placeholder="Write your todo here"
						// ref={inputRef}
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
