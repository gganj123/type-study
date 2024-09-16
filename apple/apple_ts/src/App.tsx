import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

let 박스 = <div></div>;
function App() {
  let [user, setUser] = useState<string | number>("kim");

  return (
    <div className="App">
      <h4>안녕하십니까</h4>
      <Profile name="철수" age="20"></Profile>
    </div>
  );
}

function Profile(props: { name: string; age: string }): JSX.Element {
  return <div>{props.name}입니다</div>;
}

export default App;
