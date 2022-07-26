import React, { useState }  from "react"


function Form (props) {


    const [text, setText] = useState("")

    function handleChange(event) {
        let t = event.target.value;
        setText(t);
      }
    
      function addItem (event) {
        event.preventDefault()
        if (text) {
            // setItems([...items, text])
            props.onAddItem(text)
            setText("")
        }
        
      }

    return (<form>
        <input className="input" onChange={handleChange} type="text" value={text} placeholder = "Items"></input>
        <button className="button" onClick={addItem}>ADD +</button>
      </form>)
}

export default Form
