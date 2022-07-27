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
  const [ state, setState ] = useState(layout)
  const [ activeTab, setActiveTab] = useState(0)

 const initialState = layout
 console.log(initialState)

 const curriedLayoutReducer = produce(handleTabs)

 const [ states, dispatch ] = useReducer(curriedLayoutReducer, initialState)

  function handleTabs(draft, action){
    switch(action.type){
      case 'ADD_TAB':
       setState(
        produce(
          draft => {
            draft.push(
              {
                id: action.id, 
                title:action.title,
                components: []
              }
            )
          }
        )
       )
        return 
        default: 
        return initialState
    }
  }
  // function addTab( id, type, title ){
  //   setState(
  //     produce(draft => {
  //     draft.push({
  //       id, 
  //       type,
  //       title, 
  //       components:[]
  //     })
  //   }))
  // }

  function removeTab( tabIndex){
    setState(
      produce(draft => {
        draft.splice( tabIndex, 1)
      })
    )
  }

  function addComponent( tabIndex, componentType, id, type){
    setState(
      produce( draft => {
      draft[tabIndex].components.push({
        componentType,
        id, 
        type
      })
    }))
  }

  function removeComponent( tabIndex, componentIndex){
    setState(produce( state, draft => {
      draft[tabIndex].components.splice(componentIndex, 1)
    }))
  }


  return (
    <DndProvider backend={HTML5Backend}>
    <TabContext.Provider value={[activeTab, setActiveTab]}>
    <div className="App">
      <h1>Tab</h1>
      <button onClick={() => dispatch({ type: "ADD_TAB", id: "0-3", title: "Tab 3"})}>Add Tab</button>
      <button onClick={() => removeTab(0)}>Remove Tab</button>
      <button onClick={() => addComponent( 0, 'image', 'img-component', 'component' )}>Add Widget</button>
      <button onClick={() => removeComponent(0, 1)}>Remove Widget</button>
      {activeTab}

      {
        state.map((tab, tabIndex) => {
          return <Tab tabIndex={tabIndex} tab={tab} removeComponent={removeComponent} addComponent={addComponent}/>
        })
      }
    </div>
    </TabContext.Provider>
    </DndProvider>
  );
}

export default App;
