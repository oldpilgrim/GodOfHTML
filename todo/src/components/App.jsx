import React from "react";

function App() {

  const [inputText, setInputText] = React.useState("");
  const [todoArray, setTodos] = React.useState([]);

  function handleInputText(event) {
    // note: cannot directly use event in hook setter
    const text = event.target.value;
    setInputText(text);
  }

  function handleButtonClick() {
    // append to the current array with spread operator
    setTodos([...todoArray, inputText]);
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        {/* This is controlled input */}
        <input type="text" value={inputText} onChange={handleInputText}/>
        <button onClick={handleButtonClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todoArray.map(item => {
            // note there should be a key attribute here
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
