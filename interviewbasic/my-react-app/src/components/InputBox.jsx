import { useState } from "react";

function InputBox() {

  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Add or Update item
  const addItem = () => {
    if (text.trim() === "") return;

    if (editIndex !== null) {
      const updatedItems = [...items];
      updatedItems[editIndex] = text;
      setItems(updatedItems);
      setEditIndex(null);
    } else {
      setItems([...items, { text, completed: false }]);
    }

    setText("");
  };

  // Delete item
  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  // Edit item
  const editItem = (index) => {
    setText(items[index].text);
    setEditIndex(index);
  };

  // Toggle complete
  const toggleComplete = (index) => {
    const updatedItems = [...items];
    updatedItems[index].completed = !updatedItems[index].completed;
    setItems(updatedItems);
  };

  // Clear all
  const clearAll = () => {
    setItems([]);
  };

  return (
    <div className="input-box">

      <h2>App 🚀</h2>

      <input
        type="text"
        placeholder="Enter task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={addItem}>
        {editIndex !== null ? "Update" : "Add"}
      </button>

      <button onClick={clearAll}>Clear All</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>

            <span
              onClick={() => toggleComplete(index)}
              style={{
                textDecoration: item.completed ? "line-through" : "none",
                cursor: "pointer"
              }}
            >
              {item.text}
            </span>

            <button onClick={() => editItem(index)}>Edit</button>
            <button onClick={() => deleteItem(index)}>Delete</button>

          </li>
        ))}
      </ul>

    </div>
  );
}

export default InputBox;