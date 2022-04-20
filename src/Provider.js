import React, { useState } from "react";
import Context from "./Context";

export default function Proider(props) {
  const [count, setCount] = useState(0);
  return (
    <Context.Provider
      value={{
        count: count,
        increment: () => {
          setCount(count + 1);
        },
        decrement: () => {
          setCount(count - 1);
        }
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
