import React ,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notesArr,editNote] = useState([]);
  

  function addNewNote(note){
    editNote(prevNotes => [...prevNotes, note]);
  }
  
  function deleteNote(id) {
    editNote(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNewNote} />
      { notesArr.map((noteItem,index) => {
        return(
          <Note key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        )
      })}
      <Footer />
    </div>
  );
}

export default App;
