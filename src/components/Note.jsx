import React from "react";
import DeleteIcon from "@material-ui/icons/Delete"

function Note(prop) {
  return (
    <div className="note">
      <h1>{prop.title}</h1>
      <p>{prop.content}</p>
      <button
        onClick={() => {
          prop.deleteNote(prop.id);
        }}
      >
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
