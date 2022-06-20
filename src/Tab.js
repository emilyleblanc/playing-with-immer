import React from "react";

const Tab = ({ tab, tabIndex, removeComponent, addComponent }) => {

  const { id, title, components } = tab;

 function moveComponentToNewTab(currTabIndex, currComponentIndex){
    removeComponent( currTabIndex, currComponentIndex)
    addComponent( 2, 'image', 'img-component', 'component' )
  }

  return (
    <li key={id}>
      <p>{title}</p>
      <ul>{components.map((component, compIndex) => <p key={`${tabIndex}-${compIndex}`} onClick={()=> moveComponentToNewTab(tabIndex, compIndex)}>{component.componentType}</p>)}</ul>
    </li>
  );
};
export default Tab;
