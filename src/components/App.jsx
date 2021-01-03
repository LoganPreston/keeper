import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
  const [allNotes, setAllNotes] = useState([]);

  function addNote(newNote) {
    setAllNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
    
  }

  function deleteNote(id) {
    setAllNotes((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {allNotes.map((note, idx) => (
        <Note
          key={idx}
          id={idx}
          title={note.title}
          content={note.content}
          deleteNote={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
