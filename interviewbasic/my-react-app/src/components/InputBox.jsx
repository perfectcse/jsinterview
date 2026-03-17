import { useState } from "react";

function InputBox() {

  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  // Add item
  const addItem = () => {
    if (text.trim() === "") return;

    setItems([...items, text]);
    setText("");
  };

  // Delete item
  const deleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div className="input-box">

      <h2>Todo App</h2>

      <input
        type="text"
        placeholder="Enter task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={addItem}>Add</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteItem(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default InputBox;