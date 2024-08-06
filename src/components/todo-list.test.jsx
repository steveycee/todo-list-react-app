import { fireEvent, render, screen } from "@testing-library/react";
import ToDoList from "./todo-list";
import { beforeEach } from "vitest";

let addTodo;

describe("ToDoList", () => {
  beforeEach(() => {
    render(<ToDoList />);
    addTodo = screen.getByRole("button", { name: "Add list item" });
  });

  it("renders the ToDoList component and the todolist to have a heading", () => {
    expect(screen.getByRole("heading")).toHaveTextContent("Test ToDoList");
    screen.debug();
  });
  it("renders the ToDoList component and finds the add list item button", () => {
    expect(addTodo).toBeInTheDocument();
  });
  it("renders the TodoList component and clicks to add a new TodoListItem", () => {
    fireEvent.click(addTodo);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(1);
  });
});
