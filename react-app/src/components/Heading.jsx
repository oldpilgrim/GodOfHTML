import React from 'react';

function Heading() {
    // notice that we can write plain HTML. No need for any of that EJS stuff. This is JSX
    // wrap js expressions (not statements) with curly braces. Kind of like string interpolation
    return <header>
        <h1>Welcome to React</h1>
    </header>
}

export default Heading