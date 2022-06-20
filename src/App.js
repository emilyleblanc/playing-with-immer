import React, { useState , createContext } from 'react';
import { initialData } from './initialData';
import Tab from './Tab';

//immer imports
import produce from 'immer';
//state for the active tab index
export const TabContext = createContext()

function App() {

  //set up the state of the layout
  const { layout } = initialData
  const [ state, setState ] = useState(layout)
  const [ activeTab, setActiveTab] = useState(0)


  function addTab( id, type, title ){
    setState(
      produce(draft => {
      draft.push({
        id, 
        type,
        title, 
        components:[]
      })
    }))
  }

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
    <TabContext.Provider value={[activeTab, setActiveTab]}>
    <div className="App">
      <h1>Tab</h1>
      <button onClick={() => addTab( 3,'component','Art') }>Add Tab</button>
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
  );
}

export default App;
