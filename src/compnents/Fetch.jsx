import { useContext } from "react"
import { channelContext, userContext } from "../App"


function Fetch() {
    const user = useContext(channelContext)
    const {count, increment, decrement,reset}= useContext(userContext)
  return (
   <div>
    <h1>COUNTER: {count}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Fetch