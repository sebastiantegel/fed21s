import { useSelector } from "react-redux";
import { IState } from "../redux/models/IState";

export const CounterAgain = () => {
  const count = useSelector((state: IState) => state.counter.value);

  return <div>Från annan räknare: {count}</div>;
};
