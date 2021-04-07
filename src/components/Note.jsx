import React from "react";
import DeleteIcon from '@material-ui/icons/DeleteForever';

function Note(props) {

	function delete1(){
		props.onDelete(props.id)
	}

  	return (
    	<div className="note">
     		<h1>{props.title}</h1>
        	<p>{props.content}</p>
        	<button onClick={delete1}><DeleteIcon/></button>
    	</div>
  	);
}

export default Note;
