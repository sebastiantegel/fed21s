import { Todo } from "../models/Todo";

interface IPrintTodoProps {
  todo: Todo;
}

export const PrintTodo = (props: IPrintTodoProps) => {
  return (
    <div>
      {props.todo.done ? (
        <h4 className="done">{props.todo.text}</h4>
      ) : (
        <h4>{props.todo.text}</h4>
      )}
    </div>
  );
};
