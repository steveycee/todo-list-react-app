import { fireEvent, render, screen } from "@testing-library/react";
import TodoListItem from "./todo-list-item";
import { beforeEach } from "vitest";

let removeTodo;
let addTodo;

describe.skip("Todo List Item tests", () => {
  beforeEach(() => {
    render(<TodoListItem />);
  });
  it("renders the Todo List Item with a remove todo button", () => {
    removeTodo = screen.getByRole("button", { name: "X" });
    expect(removeTodo).toBeInTheDocument();
  });
  it("renders the Todo List Item with a add todo button", () => {
    addTodo = screen.getByRole("button", { name: "✓" });
    expect(addTodo).toBeInTheDocument();
  });
  it("saves the Todo List Item when you click the add todo button", () => {
    addTodo = screen.getByRole("button", { name: "✓" });
    const input = screen.getByRole("textbox"); // Adjust the placeholder text as necessary
    fireEvent.change(input, { target: { value: "Steve" } });
    fireEvent.click(addTodo);
    expect(input).toHaveValue("Steve");
    screen.debug();
  });
});
