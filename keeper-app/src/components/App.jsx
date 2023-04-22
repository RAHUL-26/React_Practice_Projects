import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// import notes from "../notes";
import CreateArea from "./CreateArea";


function App(){

  const [notes,setNote]=React.useState([]);

  function addNote(note){

    if(note.title===""){
      alert("No Title Added");
      return note;
    }
    else if(note.content==="")
    {
      alert("No Content Added");
      return note;
    }
    else{
    setNote(prevValue=>{
      return [...prevValue,note];
    });
    return null;
  }
  }

  function createNote(note,index){
    return (<Note 
      key={index}
      id={index}
      title={note.title}
      content={note.content}
      deleteNote={deleteNote}
    />)
  }
  
  function deleteNote(id){
    setNote(prevValue=>{
      return prevValue.filter((val,index)=>{
        return index!==id;
      });
    });
  }
    return (
        <div>
            <Header/>
            <CreateArea addNote={addNote}/>
            {notes.map(createNote)}
            {/* {notes.map((note,index)=>{
                return (<Note 
                  key={index}
                  id={index}
                  title={note.title}
                  content={note.content}
                  deleteNote={deleteNote}
                />);
            })} */}
            <Footer/>
        </div>
    );
}

export default App;