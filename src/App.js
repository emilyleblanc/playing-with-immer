import React, { useState , createContext, useReducer } from 'react';
import { initialData } from './initialData';
import Tab from './Tab';

//immer imports
import produce from 'immer';
//react dnd
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

//state for the active tab index
export const TabContext = createContext()

function App() {

  //set up the state of the layout
  const { layout } = initialData
  // const [ state, setState ] = useState(layout)
  const [ activeTab, setActiveTab] = useState(0)




 const [ state, dispatch ] = useReducer(produce((draft, action) => {
   switch(action.func){
     case 'ADD_TAB': 
      draft.push({
        id: action.id, 
        title: action.title,
        components: []
      })
         break
      case 'REMOVE_TAB':
        draft.splice( action.tabIndex, 1)
      break
      case 'ADD_COMPONENT':
        draft[action.tabIndex].components.push({
          componentType: action.componentType,
          id: action.id, 
          type: action.type
          })
        break
      case 'DELETE_COMPONENT':
        draft[action.tabIndex].components.splice(action.componentIndex, 1)
        break
       default: 
       break
   }
 }), layout)


  return (
    <DndProvider backend={HTML5Backend}>
    <TabContext.Provider value={[activeTab, setActiveTab]}>
    <div className="App">
      <h1>Tab</h1>
      <button onClick={() => dispatch({ func: "ADD_TAB", id: "0-3", title: "Tab 3"})}>Add Tab</button>
      <button onClick={() => dispatch({ func: "REMOVE_TAB", tabIndex: 1})}>Remove Tab</button>
      <button onClick={() => dispatch({ func: "ADD_COMPONENT", tabIndex: 1, componentType: 'image', id: 0, type:'widget'  })}>Add Widget</button>
      <button onClick={() => dispatch({ func: "DELETE_COMPONENT", tabIndex: 1, componentIndex: 1})}>Remove Widget</button> 
      {activeTab}

      {
        state.map((tab, tabIndex) => {
          return <Tab 
          tabIndex={tabIndex} tab={tab} 
          //removeComponent={removeComponent} 
          //addComponent={addComponent}
          />
        })
      }
    </div>
    </TabContext.Provider>
    </DndProvider>
  );
}

export default App;
