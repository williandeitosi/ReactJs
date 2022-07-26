import React, { useState } from "react";
import "./Todo.css";
import List from "./components/List";
import Form from "./components/Form";
import Item from "./components/item"


function ToDo() {
  
  const [items, setItems] = useState([])
  
    function onAddItem (text) {

        let it= new Item(text)

        setItems ([...items, it])
    }
    

  return (
    <div className="container">
      <h1>ToDo List</h1>
      <Form onAddItem = {onAddItem}></Form>
      <List items={items}></List>
    </div>
  );
}




export default ToDo;
