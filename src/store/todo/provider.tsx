import React, { FC, useReducer } from "react";

import Context from "./context";
import reducer from "./reducer";
import initialState from "./initialState";

const TodoProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
export default TodoProvider;
