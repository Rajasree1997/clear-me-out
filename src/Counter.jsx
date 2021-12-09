import { useState } from "react"

const Counter = ({store}) => {
    const[input,setInput]=useState("");
    const addTodo=(value)=>{
        store.dispatch({
            type:"ADD_TODO",
            value
        })
    }

    return (
        // <div className="main_container_count">
        //     <button onClick={()=>{
        //         store.dispatch({
        //             type:"INCREMENT"
        //         })
        //     }}>+</button>
        //     <div className="result">{store.getState()}</div>
        //     <button onClick={()=>{
        //         store.dispatch({
        //             type:"DECREMENT"
        //         })
        //     }}>-</button>
            
            
        // </div>
        <div className="todo">
            <div className="input_section">
                <input type="text"
                onChange={(e)=>{
                    setInput(e.target.value)
                }}/>
                <button onClick={()=>{
                    addTodo(input);

                }}>ADD</button>
                </div>
                <div className="todo_list">
                    {
                        store.getState().map((value,i)=><div key={i}>
                            {value}
                            <button onClick={()=>{
                                addTodo()
                            }}>close</button>
                            </div>)
                    }
            </div>
        </div>
       

        
    )
    
}

export default Counter
