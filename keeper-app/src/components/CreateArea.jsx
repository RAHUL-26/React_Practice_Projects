import React from "react";

function CreateArea(props) {
    const[note,setNote]=React.useState({
        title:"",
        content:""
    });
     function handleChange(event){
        const{name,value}=event.target;
       setNote(prevVal=>{
        return {
            ...prevVal,
            [name]:value
        }
       });
     }

     function submitNote(event){
        const newNote=props.addNote(note);
        if(newNote!==null){
            setNote({
                title:newNote.title,
                content:newNote.content
            })
        }
        else{
        setNote(
            {
                title:"",
                content:""
            }
        )
        }
        event.preventDefault();
     }
  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content} />
        <button type="submit" onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;