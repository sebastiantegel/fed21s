import { ChangeEvent, useState } from "react";
import { Todo } from "../models/Todo";

interface IPrintTodoProps {
  todo: Todo;
  removeTodo(todo: Todo): void;
  updateTodo(todo: Todo): void;
}

export const PrintTodo = (props: IPrintTodoProps) => {
  const [inEdit, setInEdit] = useState(false);
  const [editedTodo, setEditedTodo] = useState(props.todo.text);

  const handleClick = () => {
    props.removeTodo(props.todo);
  };

  const handleEditChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditedTodo(e.target.value);
  };

  const handleUpdate = () => {
    props.updateTodo({ ...props.todo, text: editedTodo });
    setInEdit(false);
  };

  return (
    <>
      {inEdit ? (
        <>
          <input type="text" value={editedTodo} onChange={handleEditChange} />
          <button onClick={handleUpdate}>Uppdatera</button>
        </>
      ) : (
        <>
          <div onClick={handleClick}>{props.todo.text}</div>
          <button
            onClick={() => {
              setInEdit(!inEdit);
            }}
          >
            Ändra
          </button>
        </>
      )}
    </>
  );
};
