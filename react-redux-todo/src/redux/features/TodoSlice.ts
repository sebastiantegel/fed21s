import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "../../models/Todo";
import { getList, save } from "../../services/StorageService";
import { IAction } from "../models/IAction";

let defaultValue: Todo[] = getList<Todo>();

const todoSlice = createSlice({
  name: "todo",
  initialState: { value: defaultValue },
  reducers: {
    add: (state, action: IAction<string>) => {
      state.value.push({ text: action.payload, done: false });
      save(state.value);
    },
    remove: (state, action: IAction<number>) => {
      state.value.splice(action.payload, 1);
      save(state.value);
    },
    toggle: (state, action: IAction<number>) => {
      state.value[action.payload].done = !state.value[action.payload].done;
      save(state.value);
    },
  },
});

export const { add, remove, toggle } = todoSlice.actions;

export default todoSlice.reducer;
