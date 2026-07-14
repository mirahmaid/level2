import { createContext, useReducer } from "react";
const Data = createContext();

const initialData ={feild: "React.js",level: "junior",count: 0,theme: "light",};
const reducer = (state, action) => {
  switch (action.type) {

    case "CHANGE_FEILD":
      return {
        ...state,
        feild: action.newValue
      };

    case "CHANGE_LEVEL":
      return {
        ...state,
        level: action.newValue
      };

    case "INCREASE":
      return {
        ...state,
        count: state.count + 1
      };

    case "CHANGE_THEME":
      return {
        ...state,
        theme: action.newValue
      };

    default:
      return state;
  }
};
//const reducer = (state) => {
//  return state;
//};
export function DataProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);

  const changeField = () => {
    dispatch({ type: "CHANGE_FEILD", newValue: "Angular" });
  };
  const changeLevel = () => {
    dispatch({ type: "CHANGE_LEVEL", newValue: "senior" });
  };
    const changeCount = () => {
    dispatch({ type: "INCREASE", newValue:firstState.count+1  });
  };
    const changeTheme = (newTheme) => {
    dispatch({ type: "CHANGE_THEME", newValue: newTheme });
  };
  return (
    <Data.Provider value={{ ...firstState, changeField,changeLevel ,changeCount,changeTheme}}>
      {children}
    </Data.Provider>
  );
}
export default Data;
