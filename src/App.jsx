import { useDispatch, useSelector } from "react-redux";
import { decrement, decrementByAmount, increment, incrementByAmount } from "./app/Features/Counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <div className="flex justify-center items-center gap-5 text-5xl font-bold">
        <button
          className="btn btn-success text-white rounded-sm btn-md btn-outline"
          aria-label="Increment value"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment 5
        </button>
        <button
          className="btn btn-success text-white rounded-sm btn-md"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          className="btn btn-error text-white rounded-sm btn-md"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="btn btn-error text-white rounded-sm btn-md btn-outline"
          aria-label="Decrement value"
          onClick={() => dispatch(decrementByAmount(5))}
        >
          Decrement 5
        </button>
      </div>
    </div>
  );
}

export default App;
