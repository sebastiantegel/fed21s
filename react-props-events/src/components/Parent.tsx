import { useState } from "react";
import { Person } from "../models/Person";
import { ChangeInput } from "./ChangeInput";
import { Child } from "./Child";

export const Parent = () => {
  const [something, setSomething] = useState<Person[]>([]);

  const handleClick = () => {
    setSomething([...something, new Person("Sebastian", true, 42)]);
  };

  //   console.log(something);

  let showChildHtml = <></>;
  if (something.length !== 0) {
    showChildHtml = <Child me={something[0]}></Child>;
  }

  return (
    <>
      <ChangeInput></ChangeInput>
      {showChildHtml}
      <button onClick={handleClick}>Klicka här</button>
    </>
  );
};
