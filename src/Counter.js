import React from "react";
import Context from "./Context";

export default function Counter() {
  return (
    <div>
      <Context.Consumer>
        {(Context) => {
          return (
            <div>
              <button onClick={Context.increment}>increase</button>
              <button onClick={Context.decrement}>decrement</button>
            </div>
          );
        }}
      </Context.Consumer>
    </div>
  );
}
