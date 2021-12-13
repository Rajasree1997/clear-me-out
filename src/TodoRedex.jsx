import { useState } from "react";
import { useSelector,useDispatch } from "react-redux"
import "./todoredex.css"
const TodoRedex = () => {
    const [input,setInput]=useState("");
    const dispatch = useDispatch();
    const todoList = useSelector(state=>state) ;
    return (
        <div className="main">
        <div className="todo_add">
            
            <input type="text"
            onChange={(e)=>{
                setInput(e.target.value)
                
            }}value={input}></input>
            <button className="add"
            onClick={()=>
               {dispatch({
                    type:"Add_Todo",
                    value:input
                })
                setInput("")
            }
            }>ADD</button>

           <div className="todoList">
               {todoList.map((value,i)=>
               <div className="value">{value}
               <button className="remove"
            onClick={()=>
               {dispatch({
                    type:"Remove_Todo",
                    index:i
                })
               
            }
            }>REMOVE</button>
            </div>
               )}
           </div>
        </div>
       
        </div>

        
    )
}

export default TodoRedex
