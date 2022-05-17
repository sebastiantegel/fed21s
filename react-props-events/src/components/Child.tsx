import { Person } from "../models/Person";

interface IChildProps {
  me: Person;
}

export const Child = (props: IChildProps) => {
  return (
    <>
      <p>{props.me.name}</p>
      <p>{props.me.age}</p>
      <input type="checkbox" checked={props.me.isMarried} readOnly />
    </>
  );
};
