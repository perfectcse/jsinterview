import { useState, useEffect } from "react";
import InputBox from "./components/InputBox";
import "./App.css";

function App() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Async function
  const fetchUsers = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // useEffect
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container">

      <h1>🚀 React Todo + API</h1>

      <InputBox />

      <hr />

      <h2>Users List</h2>

      {/* Error Handling */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Loading */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}

    </div>
  );
}

export default App;