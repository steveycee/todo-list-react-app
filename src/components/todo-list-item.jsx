import "./todo-list-item.css";

function ListItem({ handleRemoveListItem }) {
  return (
    <>
      <li className="listitem">
        <p>Test ListItem</p>
        <button
          onClick={() => {
            handleRemoveListItem();
          }}
        >
          X
        </button>
      </li>
    </>
  );
}

export default ListItem;
