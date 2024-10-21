import "./todo-list.css";

function ToDoListInput({ setTodos, todos, nextId, todoInputContent, setTodoInputContent }) {

  const handleSavingListItem = (e) => {
    e.preventDefault();
    const newTodo = {
      id: nextId.current++,
      content: todoInputContent,
      status: true,
    };
    setTodos([...todos, newTodo]);
    console.log(
      "handleSavingListItem called with the following content: " +
        todoInputContent + " with the ID: " + newTodo.id + " and the status of: " + newTodo.status
    );
    setTodoInputContent("");
  };

  return (
    <>
      <form onSubmit={handleSavingListItem} className="flex-row border">
        <textarea
          type="text"
          value={todoInputContent}
          placeholder="Enter text here"
          onChange={(e) => setTodoInputContent(e.target.value)}
          required
        />
        <input type="submit" value="✓" className="form-submit-button" />
      </form>
      <p>TodoInputContent is: {todoInputContent}</p>
    </>
  );
}
export default ToDoListInput;
