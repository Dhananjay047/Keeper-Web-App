import React ,{ useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { Zoom } from '@material-ui/core';


function CreateArea(props) {

	const [note,newNote] = useState({
    	title : "",
    	content : ""
  	});

	const [pop,setPop] = useState(false);

	function handleText(event){
		const { name, value } = event.target;
    	newNote(prevValue => {
      	return {
        	...prevValue,
        	[name]: value
      	};
      });
	}

	function sendNote(event){
		props.onAdd(note);
    	newNote({
     		title: "",
      		content: ""
    	});
    	setPop(false);
		event.preventDefault();
	}

	function handlePop(){
		setPop(true);
	}

  	return (
    	<div>
     		<form class="create-note" >
          		{pop && <input 
         			name="title"
         			onChange={handleText}
            		value={note.title}
          			placeholder="Title" 
          		/>}
        		<textarea name="content"
          			onChange={handleText}
            		value={note.content}
          			placeholder="Take a note..."
          			rows={pop?3:1}
          			onClick={handlePop}
        		/>
        		<Zoom in={pop}>
        			<Fab onClick={sendNote} color="primary" aria-label="add">
        				<AddIcon />
      				</Fab>
      			</Zoom>
      		</form>
    	</div>
  	);
}

export default CreateArea;
