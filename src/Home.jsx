import { useContext } from "react";
import Data from "./context/Data";
export default function Home() {
const { feild, level, count } = useContext(Data);
  return (
    <div>
      <h1>Home page</h1>
    <h2>My field is {feild}</h2>
<h2>My level is {level}</h2>
<h2>Count: {count}</h2>
    </div> 
  );
}