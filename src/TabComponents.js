import React from 'react'
import { useDrag } from "react-dnd";


const TabComponents = ({ component, compIndex, tabIndex, removeComponent,
  addComponent }) => { 

  const { componentType, type } = component

  const [{ opacity }, dragRef ] = useDrag(() => ({
    type: type,
    item: componentType, 
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1
    })
  }), [])

  function moveComponentToNewTab(currTabIndex, currComponentIndex) {
    removeComponent(currTabIndex, currComponentIndex);
    addComponent(2, "image", "img-component", "component");
  }

  return (
       <li
        ref={dragRef}
        key={`comp-${compIndex}`}
        onClick={() => moveComponentToNewTab( tabIndex, compIndex)}
        style={{ opacity }}
      >
        <p>{component.componentType}</p>
      </li>
  )
}  
export default TabComponents;