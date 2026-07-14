import "./App.css";
import "./Theme.css";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Data from "./context/Data";
function App() {
  const { feild, level, count, theme, changeField } = useContext(Data);
  return (
    <div className={`App ${theme}`}>
      <h1>My field is {feild}</h1>
      <button onClick={changeField}>
        Change field
      </button>
      <br />
      <h1>I'm a {level}</h1>
      <button>
        Change Level
      </button>
      <br />
      <button>
        Counter {count}
      </button>
      <br />
      <br />
      <div><button
          style={{ marginTop: "30px" }}  >
          {theme === "light" ? <FaMoon /> : <FaSun />}</button> 
         <br />
        <Link to="/Home"><button style={{ marginTop: "30px" }}>Go to home</button></Link>
</div>
</div>);}
export default App;