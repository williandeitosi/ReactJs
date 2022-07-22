import React from "react";
import Header from "./Header";
import Counter from "./Counter";
import "./App.css";

function App() {
  return (
    <div>
      <Header
        name="WT"
        links={["Sobre", "Contato", "Local", "Login"]}
      ></Header>
      <Counter count = {0}></Counter>
      {/* mudar uma propriedade para state */}
    </div>
  );
}

export default App;
