import { useDispatch, useSelector } from "react-redux";
import { remove, toggle } from "../redux/features/TodoSlice";
import { IState } from "../redux/models/IState";
import Switch from "@mui/material/Switch";

export const Todos = () => {
  const todos = useSelector((state: IState) => state.todo.value);
  const dispatch = useDispatch();

  return (
    <>
      {todos.map((todo, i) => {
        return (
          <div key={i}>
            <span>{todo.text}</span>
            <Switch
              // type="checkbox"
              checked={todo.done}
              onChange={() => {
                dispatch(toggle(i));
              }}
            />
            <button
              onClick={() => {
                dispatch(remove(i));
              }}
            >
              Ta bort
            </button>
          </div>
        );
      })}
    </>
  );
};
