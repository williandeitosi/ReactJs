import React from "react";
import "./App.css";
import Menu from "./Menu"

function Header(props) {
  return (
    <header className="container">
      <h1>{props.name}</h1>
      <Menu links = {props.links}></Menu>
    </header>
  );
}



export default Header; // exportando

// criando o componente para utilizar no App.js
