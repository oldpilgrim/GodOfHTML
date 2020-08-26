// must import for every component
import React from 'react';
import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
    return <div>
        <Heading />

        {notes.map(note => {
            return (
                <Note
                    key={note.key}
                    title={note.title}
                    content={note.content}
                />
            );
        })}

        <Footer />
    </div>
}

export default App;