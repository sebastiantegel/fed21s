import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/features/TodoSlice";

export const AddTodo = () => {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <input
        type="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setTodoText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(add(todoText));
        }}
      >
        Spara
      </button>
    </>
  );
};
