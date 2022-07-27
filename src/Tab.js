import React, {useContext} from "react";
import { TabContext } from "./App";
import TabComponents from './TabComponents'


const Tab = ({ tab, tabIndex, removeComponent, addComponent }) => {

  const { id, title, components } = tab;

  const [ activeTab, setActiveTab ] = useContext(TabContext)

  return (
    <li key={id}>
      <h3 onClick={() => setActiveTab(tabIndex)}>{title}</h3>
      <ul>
        {components.map((component, compIndex) => {
          if(activeTab === tabIndex){
            return (
                <TabComponents
                  component={component}
                  compIndex={compIndex}
                  tabIndex={tabIndex}
                  //removeComponent={removeComponent}
                  //addComponent={addComponent}
                  />
            )
          }else{return null} 
        } 
        )}
      </ul>
    </li>
  );
};
export default Tab;
