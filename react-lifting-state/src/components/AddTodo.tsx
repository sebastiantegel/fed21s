import { ChangeEvent, useState } from "react";
import { Todo } from "../models/Todo";

interface IAddTodoProps {
  addTodo(text: string): void;
}

export const AddTodo = (props: IAddTodoProps) => {
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleClick = () => {
    props.addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <>
      <input type="text" value={newTodo} onChange={handleChange} />
      <button onClick={handleClick}>Lägg till</button>
    </>
  );
};
