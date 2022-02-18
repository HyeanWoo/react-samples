import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const handleClick = () => setCounter((prev) => prev + 1);
  const handleChange = ({ target }) => setKeyword(target.value);

  console.log("Rendering");

  useEffect(() => {
    console.log("Calling API...");
  }, []);

  useEffect(() => {
    console.log(`Search for ${keyword}`);
  }, [keyword]);

  return (
    <div>
      <input type="text" name="search" onChange={handleChange} />
      <h1>{counter}</h1>
      <button onClick={handleClick}>click me</button>
    </div>
  );
}

export default App;
