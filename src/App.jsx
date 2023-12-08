import React, { useState } from "react"
import Fetch from "./compnents/Fetch"
export const channelContext = React.createContext()
export const userContext = React.createContext()
import SubmitForm from "./compnents/SubmitForm"


function App() {
  const [count, setCount] = useState(0)
  function increment(){
    setCount(count +1)
  }
  function decrement(){
    setCount(count-1)
  }
  function reset(){
    setCount(0)
  }
  return (
    
    <div>
      <channelContext.Provider value={'Ayushi'}>
        <userContext.Provider value={{count,increment,decrement,reset}}>
          
   
      <Fetch></Fetch>
      <SubmitForm></SubmitForm>
      </userContext.Provider>
      </channelContext.Provider>
    </div>
  )
}

export default App