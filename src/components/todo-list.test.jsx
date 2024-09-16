import { fireEvent, render, screen } from "@testing-library/react";
import ToDoList from "./todo-list";
import { beforeEach, it } from "vitest";

let submitButton;

const addTodo = (todoText) => {
	const input = screen.getByRole("textbox");
	fireEvent.change(input, { target: { value: todoText } });
	expect(input).toHaveValue(todoText);
	fireEvent.click(submitButton);
}

const addMultipleTodos = (amount, todotext) => {
	for (let i = 0; i < amount; i++) {
		addTodo(todotext + i);
	  }
}

const checkListLength = (length) => {
	const todosListItem = screen.getAllByRole("listitem");
	expect(todosListItem).toHaveLength(length);
}

const removeTodo = (todoNo) => {
	const removeButton = screen.getAllByRole("button", { name: "Remove" });
	fireEvent.click(removeButton[todoNo]);
}

describe("Todo list tests", () => {

	beforeEach(() => {
		render(<ToDoList />);
		submitButton = screen.getByRole("button", { name: "✓" });
	});

	it("renders the ToDoList component and the todolist has a heading.", () => {
		expect(screen.getByRole("heading")).toHaveTextContent("Test ToDoList");
		screen.debug();
	});

	it("renders the ToDoList component and finds the submit button.", () => {
		expect(submitButton).toBeInTheDocument();
	});

	it("renders the ToDoList component and types in the input field.", () => {
		addMultipleTodos(2, "Adding multiple todos: New todo ");
		checkListLength(2);
	});

	it("renders the ToDoList component, adds a todo and then removes the todo.", () => {
		addTodo("Add and remove todo");
		checkListLength(1)
		removeTodo(0);
		// couldnt recheck for todoListItem as that array is already initialised above. Can't check it again because now there isn't any. What I can do is query that its there and then expect it not to be.
		const updatedTodosListItem = screen.queryByRole('listitem')
		expect(updatedTodosListItem).toBeNull()
	});

	it("renders the ToDoList component, adds 3 todo's and then deletes the 2nd one.", () => {
		addMultipleTodos(3, 'Add 3 todos and delete the 2nd one: New todo ');
		checkListLength(3);
		removeTodo(2)
		checkListLength(2);
		screen.debug();
		// should I assert that the text in the other 2 are right?
	});

	it.skip("renders the ToDoList component, adds a todo and then marks it as done.", () => {
		const setDoneButton = screen.getByRole("button", { name: "Done" });
		fireEvent.click(setDoneButton);
	});

});
