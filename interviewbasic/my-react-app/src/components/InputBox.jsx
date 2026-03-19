import { useState, useEffect } from "react";

function InputBox() {

  // ✅ Load from localStorage (Lazy Initialization)
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [text, setText] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // ✅ Save to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(items));
  }, [items]);

  // ➕ Add / Update Item
  const addItem = () => {
    if (text.trim() === "") return;

    if (editIndex !== null) {
      const updated = [...items];
      updated[editIndex].text = text;
      setItems(updated);
      setEditIndex(null);
    } else {
      setItems([...items, { text, completed: false }]);
    }

    setText("");
  };

  // ❌ Delete Item
  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  // ✏️ Edit Item
  const editItem = (index) => {
    setText(items[index].text);
    setEditIndex(index);
  };

  // ✅ Toggle Complete
  const toggleComplete = (index) => {
    const updated = [...items];
    updated[index].completed = !updated[index].completed;
    setItems(updated);
  };

  // 🧹 Clear All
  const clearAll = () => {
    setItems([]);
  };

  return (
    <div className="input-box">

      <h2>Advanced Todo App 🚀</h2>

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