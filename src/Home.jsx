import { useContext } from "react";
import AppContext from "./Context";
export default function Home() {
  const { Data } = useContext(AppContext);
  return (
    <div>
      <h1>Home page</h1>
      <h2>My field is {Data.feild}</h2>
      <h2>My level is {Data.level}</h2>
      <h2>Count: {Data.count}</h2>
    </div>
  );
}