import { fireEvent, render, screen } from "@testing-library/react";
import TodoListItem from "./todo-list-item";
import { beforeEach } from "vitest";

let removeTodo;

describe("Todo List Item tests", () => {
	beforeEach(() => {
		render(<TodoListItem />);
	});
	it("renders the Todo List Item with a remove todo button", () => {
		removeTodo = screen.getByRole("button", { name: "X" });
		expect(removeTodo).toBeInTheDocument();
		screen.debug();
	});
});
