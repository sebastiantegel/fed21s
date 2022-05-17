import { ChangeEvent, useState } from "react";

export const ChangeInput = () => {
  const [inputFromUser, setInputFromUser] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputFromUser(e.target.value);
  };

  console.log(inputFromUser);

  return (
    <>
      <input type="text" value={inputFromUser} onChange={handleChange} />
    </>
  );
};
