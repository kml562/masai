import { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);
  const updatecount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={updatecount}>count+</button>
    </div>
  );
};

export default Button;
