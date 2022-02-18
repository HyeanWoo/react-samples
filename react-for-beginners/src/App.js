import { useState, useEffect } from "react";

function Hello() {
  const [value, setValue] = useState(0);

  const handleValue = () => setValue((prev) => prev + 1);

  useEffect(() => {
    console.log(`created ${value}`);
    return () => console.log(`destroyed ${value}`);
  }, [value]);

  return <h1 onClick={handleValue}>Hello! {value}</h1>;
}

function App() {
  const [show, setShow] = useState(true);

  const handleClick = () => setShow((prev) => !prev);

  return (
    <div>
      {show ? <Hello /> : null}
      <button onClick={handleClick}>{show ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
