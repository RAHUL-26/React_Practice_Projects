import React from "react";

function CreateArea(props) {
    const[title,setTitle]=React.useState("");
    const[content,setContent]=React.useState("");

     function handleChange(event){
        const{name,value}=event.target;
        if(name==="title"){
            setTitle(value);
        }
        else if(name==="content"){
            setContent(value);
        }
     }

     function preventDef(event){
        event.preventDefault();
     }
  return (
    <div>
      <form onSubmit={preventDef}>
        <input onChange={handleChange} name="title" placeholder="Title" value={title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={content} />
        <button type="submit" onClick={()=>{
            const newNote=props.addNote(title,content);
            if(newNote!==null){
                setTitle(newNote.title);
                setContent(newNote.content);
            }
            else{
            setTitle("");
            setContent("");
            }
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;