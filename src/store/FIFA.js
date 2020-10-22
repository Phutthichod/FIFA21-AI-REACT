import React, { createContext, useReducer, useCallback } from "react";
const initialState = {
  team: "Manchester United",
  form: "433",
  constraints: {
    min_price: -1,
    max_price: -1,
    min_wage: -1,
    max_wage: -1,
    min_age: -1,
    max_age: -1,
    min_overall: -1,
    max_overall: -1,
  },
  pearson: [],
};

const store = createContext(initialState);
const { Provider } = store;
const FIFAProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    useCallback((state, action) => {
      const newState = state;
      switch (action.type) {
        case "set-team":
          console.log("set", action);
          return { ...state, team: action.data };
        case "set-form":
          return { ...state, form: action.data };
        case "set-constraints":
          return { ...state, constraints: action.data };
        case "set-pearson":
          return { ...state, pearson: action.data };
        default:
          return state;
      }
    }, []),
    initialState
  );

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, FIFAProvider };
