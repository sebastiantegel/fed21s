import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrease,
  increase,
  increaseWithAmount,
} from "../redux/features/counterSlice";
import { IState } from "../redux/models/IState";

export const Counter = () => {
  const count = useSelector((state: IState) => state.counter.value);
  const dispatch = useDispatch();

  const [increaseWith, setIncreaseWith] = useState(0);

  return (
    <>
      <div>
        <input
          type="number"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setIncreaseWith(+e.target.value);
          }}
          value={increaseWith}
        />
        <button
          onClick={() => {
            dispatch(increaseWithAmount(increaseWith));
          }}
        >
          Öka med {increaseWith}
        </button>
      </div>

      <button
        onClick={() => {
          dispatch(decrease());
        }}
      >
        Minska
      </button>
      {count}
      <button
        onClick={() => {
          dispatch(increase());
        }}
      >
        Öka
      </button>
    </>
  );
};
