import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="text-3xl mb-5 p-3 ">Count : {count}</div>
      <div>
        <button
          className="p-3 bg-red-200 m-2 cursor-pointer rounded-lg font-semibold hover:bg-red-500"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increase
        </button>
        <button
          className="p-3 bg-red-200 m-2 cursor-pointer rounded-lg font-semibold hover:bg-red-500"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decrease
        </button>
        <button
          className="p-3 bg-red-200 m-2 cursor-pointer rounded-lg font-semibold hover:bg-red-500"
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
