import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => setTodo(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo === "") return;

    setTodos((prevArray) => [...prevArray, todo]);
    setTodo("");
  };

  return (
    <div>
      <h2>My To dos ({todos.length})</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={handleChange}
          placeholder="Write your To do"
        />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((todoItem, index) => (
          <li key={index}>{todoItem}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
