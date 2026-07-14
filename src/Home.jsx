import { useContext } from "react";
import Data from "./context/Data";
import { Link } from "react-router-dom";
export default function Home() {
  const { feild, level, count ,theme} = useContext(Data);
  return (
    <div className = {`App ${theme}`}>
      <h1>Home page</h1>
      <h2>My field is {feild}</h2>
      <h2>My level is {level}</h2>
      <h2>Count: {count}</h2>
      <button style={{ marginTop: "30px" }}><Link to="/">Go to welcome page</Link></button>
    </div>
  );
}
