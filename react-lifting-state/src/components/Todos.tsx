import { useState } from "react";
import { Todo } from "../models/Todo";
import { AddTodo } from "./AddTodo";
import { PrintTodo } from "./PrintTodo";

export const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, new Todo(todos.length + 1, text)]);
  };

  const deleteTodo = (todo: Todo) => {
    let filteredTodos = todos.filter((t) => t.text !== todo.text);
    setTodos(filteredTodos);
  };

  const updateTodo = (todo: Todo) => {
    let temp = [...todos];
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].id === todo.id) {
        temp[i].text = todo.text;
      }
    }

    setTodos(temp);
  };

  return (
    <>
      {todos.map((t, i) => (
        <PrintTodo
          updateTodo={updateTodo}
          removeTodo={deleteTodo}
          todo={t}
          key={i}
        ></PrintTodo>
      ))}

      <AddTodo addTodo={addTodo}></AddTodo>
    </>
  );
};
