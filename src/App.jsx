/*import { useEffect } from "react"
import { useState } from "react"



function App() {
  const data ={name:"", email: "", password: ""}
  const [inputData, setInputData] = useState(data)
  const [flag, setFlag] = useState(false)

  useEffect(()=>{
    console.log("registered")

  } ,[flag])

  function handleData(e){
    setInputData({...inputData, [e.target.name]:e.target.value})
    console.log(inputData)
  }

  function handleSubmit(e){
    e.preventDefault();
    if(!inputData.name || !inputData.email || !inputData.password) {
      alert("all feilds are mandatory")

    }
    else{
      setFlag(true);
    }

  }
  return (
   <>
   <pre>{(flag)? <h2>hello {inputData.name} successfully registered</h2>:""}</pre>
   <h1>RAGISTRATION FORM</h1>
   <form onSubmit={handleSubmit}>
    <div>
    <input type='text' placeholder='enter your name' name='name' value={inputData.name} onChange={handleData}></input>
    </div>
    <div>
    <input type='text' placeholder='enter your email' name='email' value={inputData.email} onChange={handleData}></input>
    </div>
    <div>
    <input type='text' placeholder='enter your password' name='password' value={inputData.password} onChange={handleData}></input>
    </div>
    <div>
      <button type="submit">submit</button>
    </div>
   </form>
   </>
  )
      
}

export default <App*/

import Fetch from "./compnents/Fetch"

function App() {
  return (
    <div>
      <Fetch></Fetch>
    </div>
  )
}

export default App