import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";


function CreateArea(props) {

    const [isExpanded, setExpanded] = React.useState(false);
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

     function expand(){
        setExpanded(true);
     }
  return (
    <div>
      <form className="create-note">
        {isExpanded && <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />}
        <textarea onClick={expand} onChange={handleChange} name="content" placeholder="Take a note..." rows= {isExpanded?"3":"1"} value={note.content} />
        <Zoom in={isExpanded}>
        <Fab type="submit" onClick={submitNote}>
            <AddIcon/>
            </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;