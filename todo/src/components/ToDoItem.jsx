import React from "react";

function ToDoItem(props) {
    function itemClicked() {
        props.onChecked(props.id);
    }

    return (
        // can't do onClick={props.onChecked(props.id)}
        // because then you'd be calling the function (at the point of subscription)
        // but remember, you need to pass a function for it to call!
        <li onClick={itemClicked}>
            {props.text}
        </li>
        );
}

export default ToDoItem;