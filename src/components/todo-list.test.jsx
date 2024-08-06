import { render, screen } from "@testing-library/react";
import ToDoList from "./todo-list";

describe("ToDoList", () => {
	it("renders the ToDoList component and expects a H2", () => {
		render(<ToDoList />);
		expect(screen.getByRole("heading"), {
			level: 2,
		}).toBeInTheDocument();
	});
	it("renders the ToDoList component and finds the add list item button", () => {
		render(<ToDoList />);
		expect(
			screen.getByRole("button", { name: "Add list item" })
		).toBeInTheDocument();
		screen.debug();
	});
});
