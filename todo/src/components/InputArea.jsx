import React from "react";

function InputArea(props) {
    const [inputText, setInputText] = React.useState("");

    function handleInputText(event) {
        // note: cannot directly use event in hook setter
        const text = event.target.value;
        setInputText(text);
      }

    function handleButtonClick() {
        props.onInputConfirm(inputText);
        setInputText("");
    }

    return (
        <div className="form">
            {/* This is controlled input */}
            <input type="text" value={inputText} onChange={handleInputText}/>
            <button onClick={handleButtonClick}>
                <span>Add</span>
            </button>
        </div>
    );
}

export default InputArea;