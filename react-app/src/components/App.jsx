// must import for every component
import React from 'react';
import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notesArray, setNotesArray] = React.useState([]);

    function handleCreateNote(title, content) {
        setNotesArray([...notesArray, {title: title, content: content}])
    }

    function handleDeleteNote(id) {
        setNotesArray(notesArray.filter((item, index) => {
            return index !== id
        }));
    }

    return <div>
        <Heading />

        <CreateArea onCreateNote={handleCreateNote}/>

        {notesArray.map((note, index) => {
            return (
                <Note
                    key={index}
                    id={index}
                    title={note.title}
                    content={note.content}
                    onDelete={handleDeleteNote}
                />
            );
        })}

        <Footer />
    </div>
}

export default App;