import { fireEvent, render, screen } from "@testing-library/react";
import TodoListItem from "./todo-list-item";
import { beforeEach } from "vitest";

let removeTodo;
let addTodo;

describe("Todo List Item tests", () => {
	beforeEach(() => {
		render(<TodoListItem />);
	});
	it("renders the Todo List Item with a remove todo button", () => {
		removeTodo = screen.getByRole("button", { name: "X" });
		expect(removeTodo).toBeInTheDocument();
		screen.debug();
	});
	it("renders the Todo List Item with a add todo button", () => {
		addTodo = screen.getByRole("button", { name: "✓" });
		expect(addTodo).toBeInTheDocument();
		screen.debug();
	});
	it("saves the Todo List Item when you click the add todo button", () => {
		addTodo = screen.getByRole("button", { name: "✓" });
		expect(addTodo).toBeInTheDocument();
		fireEvent.click(addTodo);
		screen.debug();
	});
});
