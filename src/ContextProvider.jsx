import { useReducer } from "react";
import AppContext from "./Context";

const initialData = {
  feild: "React.js",
  level: "senior",
  count: 0,
  theme: "light",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_FEILD":
      return { ...state, feild: action.newValue };

    case "CHANGE_LEVEL":
      return { ...state, level: action.newValue };

    case "INCREASE":
      return { ...state, count: state.count + 1 };

    case "CHANGE_THEME":
      return { ...state, theme: action.newValue };

    default:
      return state;
  }
};

function AppProvider({ children }) {
  const [Data, dispatch] = useReducer(reducer, initialData);

  return (
    <AppContext.Provider value={{ Data, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;