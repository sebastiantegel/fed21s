import { useState } from "react";

export const Counter = () => {
  //   let count = 0;
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  console.log(count);

  return (
    <>
      <span>{count}</span>
      <button onClick={handleClick}>Öka</button>
    </>
  );
};
