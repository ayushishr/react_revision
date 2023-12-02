/*import { useState } from "react"


function Todo() {
    const [activity, setActivity] = useState("");
    const [list, setList] = useState([]);

    function addActivity(){
        setList((list) =>{
            const updated = [...list, activity]
            console.log(updated)
            setActivity('')
            return updated
        })
    }

    function removeActivity(i){
        const updatedList = list.filter((elem, id) =>{
            return i!=id;
        })
        setList(updatedList);

    }
    function removeAll(){
        setList([])
    }
  return (
    <div>
        <input type="text" placeholder="add items" value={activity} onChange={(e) =>setActivity(e.target.value)}/>
        <button onClick={addActivity}>addData</button>
       <h3>all activity is here</h3>
       {
        list!=[] && list.map((data,i)=>{
            return(
                <>
                <p key ={i}>
                    <div>{data}</div>
                    <button onClick={() => removeActivity (i)}>Remove(-)</button>
                </p>
                </>
            )
        })
       }
       {list.length>=1 &&
       <button onClick={removeAll}>Remove all</button>}
     
    </div>
  
  )
}

export default Todo*/