import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// import notes from "../notes";
import CreateArea from "./CreateArea";


function App(){

  const [notes,setNote]=React.useState([]);

  function addNote(title,content){

    const newNote={
      title:title,
      content:content
    }

    if(title===""){
      alert("No Title Added");
      return newNote;
    }
    else if(content==="")
    {
      alert("No Content Added");
      return newNote;
    }
    else{
    setNote(prevValue=>{
      return [...prevValue,newNote];
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
            <Footer/>
        </div>
    );
}

export default App;