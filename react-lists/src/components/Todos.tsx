import { useState } from "react";
import { Todo } from "../models/Todo";
import { PrintTodo } from "./PrintTodo";
import "./Todos.css";

export const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo("Handla", true),
    new Todo("Träna", false),
    new Todo("Koda", true),
  ]);

  const handleClick = () => {
    let temp = [...todos];
    temp.pop();
    setTodos(temp);
  };

  let html = todos.map((todo, i) => {
    return <PrintTodo key={i} todo={todo}></PrintTodo>;
  });

  return (
    <>
      <button onClick={handleClick}>Ta bort det sista objektet</button>
      {html}
    </>
  );
};
