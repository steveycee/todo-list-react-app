import "./todo-list.css";

function ToDoListInput({ todoInputContent, handleSavingListItem, setTodoInputContent }) {
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
