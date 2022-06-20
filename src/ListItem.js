import React from "react";
const ListItem = ({ task, isComplete, notes}) => { 
  return (
    <li>
      <p>{task}</p>
      <ul>
        {
          notes.map((note, index) => <li><p>{note}</p></li>)
        }
      </ul>
    </li>
  )
}  
export default ListItem;