import "./App.css";
import "./Theme.css";
import { FaSun ,FaMoon  } from "react-icons/fa";

import { useState } from "react";

function App() {
  const [feild, setFeild] = useState("React");
  const [level, setLevel] = useState("senior");
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("");

  return (
    <div className={`App ${theme}`}>
      <h1>My field is {feild}</h1>
      <button onClick={() => setFeild("Angular")}>Change field</button>
      <br/>
      <h1>I'm a {level}</h1>
      <button onClick={() => setLevel("junior")}>Change Level</button>
      <br/>
      <button onClick={() => setCount(count+1)}>Counter {count}</button>
      <br/>
      <br/>
    <div>
        <button onClick={() => setTheme("dark")} style={{ marginRight: "20px" }}>  Dark  </button>
        <button onClick={() => setTheme("light")}style={{ marginRight: "20px" }}>  Light  </button>
        <button onClick={() => setTheme("pink")} style={{ marginRight: "20px" }}>  Pink  </button>
    </div>
    <div>
      <button onClick={() => setTheme(theme==="dark"? "light":"dark")}
       style = {{marginTop:"30px"}}>
        {theme ==="dark"?<FaSun />:<FaMoon />}

       </button>
    </div>
    </div>
  );
}
export default App;
