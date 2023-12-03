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



/*function App() {
  return (
    <div>
      <header>Header</header>
      <div className="main">
        <nav>Navigation

        </nav>
        <main><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptates ab fuga tenetur, quis dolorum perspiciatis voluptate rem enim dolores unde earum eaque minima odio doloribus tempore distinctio nulla beatae?</p></main>
        <aside>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores fuga expedita nihil excepturi recusandae officia adipisci quae soluta optio ipsa!</aside>
      </div>
      <footer>Footer</footer>
     
    </div>
  )
}

export default App*/