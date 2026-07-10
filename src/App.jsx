import "./App.css";
import "./Theme.css";
import { FaSun, FaMoon } from "react-icons/fa";
import { useReducer } from "react";
import { Link } from "react-router-dom";
const initialData = {feild:"React.js",level:"senior",count:0,theme:"light"}
const reducer = (state, action) => {
   switch (action.type) {
    case "CHANGE_FEILD":
    return {...state, feild:action.newValue };
   case "CHANGE_LEVEL": return { ...state,level: action.newValue};
       case "INCREASE":
      return {...state, count: state.count+1};
    case "CHANGE_THEME":return {...state,  theme: action.newValue};
    default:
      return state;
  } 
};

function App() {
  const [Data, dispatch] = useReducer(reducer, initialData);

  return (
    <div className={`App ${Data.theme}`}>
      <h1>My field is {Data.feild} </h1>
      <button onClick={() => {
            dispatch({ type: "CHANGE_FEILD", newValue:"Angular"});
        
      }
      }>Change field</button>
      <br />
      <h1>I'm a {Data.level}</h1>
      <button onClick={() => {
            dispatch({ type: "CHANGE_LEVEL", newValue:"junior"});
        
      }
      }>Change Level </button>
      <br />
      <button onClick={() => {
            dispatch({ type: "INCREASE"});
        
      }
      }>Counter {Data.count}</button>
      <br />
      <br />
      <div>
        <button onClick={() => {
            dispatch({ type: "CHANGE_THEME", newValue:"dark"});
        
      }
      }style={{ marginRight: "20px" }}> Dark </button>
        <button onClick={() => {
            dispatch({ type: "CHANGE_THEME", newValue:"light"});
        
      }
      }style={{ marginRight: "20px" }}> Light </button>
        <button onClick={() => {
            dispatch({ type: "CHANGE_THEME", newValue:"pink"});
        
      }
      }style={{ marginRight: "20px" }}> Pink </button>
      </div>
      <div>
        <button style={{ marginTop: "30px" }}>
          <FaSun />:<FaMoon />
        </button>
      </div>
      <button style={{ marginTop: "30px" }}> <Link to="/Home">Go to home</Link></button>
    </div>
  );
}

export default App;