const LOCALSTORAGE_KEY = "todos";

export const getList = <T>(): T[] => {
  let valueFromLS = localStorage.getItem(LOCALSTORAGE_KEY) || "[]";
  return JSON.parse(valueFromLS) as T[];
};

export const save = <T>(data: T): void => {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
};
