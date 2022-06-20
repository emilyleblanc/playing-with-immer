import React, {useContext} from "react";
import { TabContext } from "./App";


const Tab = ({ tab, tabIndex, removeComponent, addComponent }) => {

  const { id, title, components } = tab;

  const [ activeTab, setActiveTab ] = useContext(TabContext)

  function moveComponentToNewTab(currTabIndex, currComponentIndex) {
    removeComponent(currTabIndex, currComponentIndex);
    addComponent(2, "image", "img-component", "component");
  }

  return (
    <li key={id}>
      <h3 onClick={() => setActiveTab(tabIndex)}>{title}</h3>
      <ul>
        {components.map((component, compIndex) => {
          if(activeTab === tabIndex){
            return (
           <li
            key={`${tabIndex}-${compIndex}`}
            onClick={() => moveComponentToNewTab(tabIndex, compIndex)}
          >
            <p>{component.componentType}</p>
          </li>

            )
          }else{return null} 
        } 
        )}
      </ul>
    </li>
  );
};
export default Tab;
