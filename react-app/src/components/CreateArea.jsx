import React from "react";

function CreateArea(props) {
    const [title, setTitle] = React.useState("");
    const [content, setContent] = React.useState("");

    function onTitleChanged(event) {
        const newTitle = event.target.value;
        setTitle(newTitle);
    }

    function onContentChanged(event) {
        const newContent = event.target.value;
        setContent(newContent);
    }

    return (
        <div>
            <form>
                <input name="title" placeholder="Title" value={title} onChange={onTitleChanged}/>
                <textarea name="content" placeholder="Take a note..." rows="3" value={content} onChange={onContentChanged}/>
                <button onClick={event => {
                    props.onCreateNote(title, content);
                    setTitle("");
                    setContent("");
                    event.preventDefault();
                }}>
                    Add
                </button>
            </form>
        </div>
    );
}

export default CreateArea;
