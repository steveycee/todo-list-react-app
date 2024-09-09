import { useState, useRef } from "react";
import TodoListItem from "./todo-list-item";

function ToDoList() {
  const [items, setItems] = useState([]);
  const [todoInputContent, setTodoInputContent] = useState("");
  const [todos, setTodos] = useState([]);

  let nextId = useRef(0);

  const addListItem = () => {
    setItems([...items, {}]);
    console.log("addListItem function called.");
  };

  const removeListItem = (index) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
    // if (index > -1) {
    //   todos.splice(index, 1);
    // }
    console.log("removeListItem function called.");
  };

  const handleSavingTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: nextId.current++,
      content: todoInputContent,
    };
    setTodos([...todos, newTodo]);
    console.log(todoInputContent)
    console.log(todos)
  };


  return (
    <>
      <h2>Test ToDoList</h2>
      {/* <button onClick={addListItem}>Add list item</button> */}
      <form
          onSubmit={handleSavingTodo}
        >
          <textarea
            type="text"
            placeholder="Enter text here"
            onChange={(e) => setTodoInputContent(e.target.value)}
          />
          <input type="submit" value="✓" />
        </form>
        <p>TodoInputContent is: {todoInputContent}</p>
      <ul>
                    {todos.map((todos) => (
                <li key={todos.id}>Todos is: {todos.content}</li> 
      ))}
      </ul>
    </>
  );
}
export default ToDoList;
