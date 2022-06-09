import { Todo } from "../../models/Todo";

export interface IState {
  todo: IValue;
}

interface IValue {
  value: Todo[];
}
