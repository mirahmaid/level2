import './App.css'
import { useState } from "react";

function App() {
    const [feild, setFeild] = useState("React");
    const [level, setLevel] = useState("senior");
const [count, setCount] = useState(0);

    return (
    <>
      <h1>My field is {feild}</h1>
      <button   onClick={() => setFeild("Angular")}
>Change field</button>
<br>
</br>
<h1>
  I'm a {level}
</h1>
<button onClick={() => {setLevel("junior")}}>Change Level</button>
  <br>
</br>
  <button onClick={() => { setCount(count+1) }}>Counter{count}</button>
    </>
  ) 
}

export default App
