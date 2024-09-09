import { fireEvent, render, screen } from "@testing-library/react";
import ToDoList from "./todo-list";
import { beforeEach, it } from "vitest";

let submitButton;

describe("Todo list tests", () => {
	beforeEach(() => {
		render(<ToDoList />);
		submitButton = screen.getByRole("button", { name: "✓" });
	});

	it("renders the ToDoList component and the todolist to have a heading", () => {
		expect(screen.getByRole("heading")).toHaveTextContent("Test ToDoList");
		screen.debug();
	});
	it("renders the ToDoList component and finds the submit button", () => {
		expect(submitButton).toBeInTheDocument();
	});
	it("renders the ToDoList component and finds the submit button", () => {
		expect(submitButton).toBeInTheDocument();
	});
	it("renders the ToDoList component and types in the input field", () => {
		const input = screen.getByRole("textbox");
		fireEvent.change(input, { target: { value: "Steve" } });
		expect(input).toHaveValue("Steve");
		fireEvent.click(submitButton);
		fireEvent.change(input, { target: { value: "Sarah" } });
		expect(input).toHaveValue("Sarah");
		fireEvent.click(submitButton);
		const todosListItem = screen.getAllByRole("listitem");
		expect(todosListItem).toHaveLength(2);
		expect(todosListItem[1]).toBeInTheDocument();
	});
});
