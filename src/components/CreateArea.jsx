import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import AddIcon from "@material-ui/icons/Add";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({ title: "", content: "" });
  const [ isExpanded, setIsExpanded ] = useState(false);

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
        {isExpanded && (
          <input
            onChange={updateNote}
            value={newNote.title}
            name="title"
            placeholder="Title"
          />
        )}

        <textarea
          onClick={() => {
            setIsExpanded(true);
          }}
          onChange={updateNote}
          value={newNote.content}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />

        <Zoom in={isExpanded}>
          <Fab
            onClick={(event) => {
              props.addNote(newNote);
              setNewNote({ title: "", content: "" });
              event.preventDefault();
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
