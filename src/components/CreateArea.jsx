import React, { useState } from "react";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({ title: "", content: "" });

  function updateNote(event) {
    const { name, value } = event.target;
    setNewNote((prevNoteContent) => {
      return {
        ...prevNoteContent,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <form className="create-note">
        <input
          onChange={updateNote}
          value={newNote.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={updateNote}
          value={newNote.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={(event) => {
            props.addNote(newNote);
            setNewNote({ title: "", content: "" });
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
