import { render, screen } from "@testing-library/react";
import ToDoList from "./todo-list";

describe("ToDoList", () => {
	it("renders the ToDoList component", () => {
		render(<ToDoList />);
		expect(screen.getByText("Test ToDoList")).toBeInTheDocument();
		screen.debug();
	});
});
