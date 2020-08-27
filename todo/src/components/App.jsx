import React from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {

  const [todoArray, setTodos] = React.useState([]);

  function addItem(inputText) {
    // append to the current array with spread operator
    setTodos([...todoArray, inputText]);
  }

  function deleteItem(id) {
    setTodos(todoArray.filter((item, index) => {
      return index !== id
    }));
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onInputConfirm={addItem} />
      <div>
        <ul>
          {todoArray.map((item, index) => {
            return <ToDoItem key={index} id={index} text={item} onChecked={deleteItem}/>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
