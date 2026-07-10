import "./App.css";
import "./Theme.css";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AppContext from "./Context";
function App() {
  const { Data, dispatch } = useContext(AppContext);
  return (
    <div className={`App ${Data.theme}`}>
      <h1>My field is {Data.feild}</h1>
      <button onClick={() => {dispatch({type: "CHANGE_FEILD",newValue: "Angular"});}}> Change field</button>
      <br />
      <h1>I'm a {Data.level}</h1>
      <button onClick={() =>{dispatch({type: "CHANGE_LEVEL",newValue: "junior"});}}>Change Level</button>
      <br />
      <button onClick={() =>{dispatch({type: "INCREASE"});}}>Counter {Data.count}
      </button>
      <br />
      <br />
      <div>
        <button onClick={()=>{ dispatch({type: "CHANGE_THEME",newValue: "dark"});}}style={{ marginRight: "20px" }}>Dark
        </button ><button onClick={()=> {dispatch({type: "CHANGE_THEME",newValue: "light"});}}  style={{ marginRight: "20px" }}>Light
        </button><button onClick={() => {dispatch({type: "CHANGE_THEME",newValue: "pink"});  }}style={{ marginRight: "20px" }}>Pink</button>
      </div>
      <div>
        <button style={{ marginTop: "30px" }}>      <FaSun /> : <FaMoon /></button>
      </div>
      <Link to="/Home"><button style={{ marginTop: "30px" }}>Go to home</button>
      </Link>
    </div>
  );
}
export default App;