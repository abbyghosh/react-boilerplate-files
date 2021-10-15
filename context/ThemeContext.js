import React, { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const initialState = {};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state };

    case "CHANGE_NAV_HEIGHT":
      return { ...state };

    default:
      return state;
  }
};

const ThemeContextProvider = ({ children, ...props }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <ThemeContext.Provider value={{ state, dispatch }}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
