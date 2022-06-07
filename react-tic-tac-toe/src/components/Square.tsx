import { useState } from "react";
import "./../styles/Square.scss";

interface ISquareProps {
  value: string;
  onClick(): void;
}

export const Square = (props: ISquareProps) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};
