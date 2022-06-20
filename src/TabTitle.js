import React,{ useContext } from "react";
import { TabContext } from "./App";

const TabTitle = ({ tab, tabIndex }) => { 
  const { title } = tab
  
  const [ activeTab, setActiveTab ] = useContext(TabContext)

  return <h3 onClick={() => setActiveTab(tabIndex)}>{title}</h3>
}  

export default TabTitle;