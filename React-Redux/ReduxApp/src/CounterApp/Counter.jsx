import { increment, decrement, reset } from "./counterSlice";
import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const counterValue = useSelector((state) => state.counter.count);
  const disptach = useDispatch();
  return (
    <>
      <button style={{fontSize: "50px", cursor: "pointer"}} onClick={() => disptach(increment())}>+</button>
      <span style={{padding: "10px", fontSize: "40px"}}>{counterValue}</span>
      <button style={{fontSize: "50px", cursor: "pointer"}} onClick={() => disptach(decrement())}>-</button>
      <br />
      <br />
      <button style={{padding: "10px", cursor: "pointer"}} onClick={() => disptach(reset())}>Reset</button>
    </>
  );
}

export default Counter;
