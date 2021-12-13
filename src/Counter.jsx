import { useSelector,useDispatch } from "react-redux"

const Counter = () => {
    const dispatch = useDispatch();
  const count = useSelector(state=>state) ; 
  console.log(count);
    // const addTodo=(value)=>{
    //     store.dispatch({
    //         type:"ADD_TODO",
    //         value
    //     })
    // }
    // const deleteTodo=(index)=>{
    //     store.dispatch({
    //         type:"DELETE_TODO",
    //         index
    //     })
    // }
    // const sortTodo=(value)=>{
    //     store.dispatch({
    //         type:"SORT_TODO",
    //         value
    //     })
    // }

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
            <button
            onClick={()=>{
                dispatch({
                    type:"Increment"
                })
                
            }}>+</button>
           <div className="value">
               {/* {store.getState()} */}{count}
               
               </div> 
               <button
            onClick={()=>{dispatch({
                type:"Decrement"
            })
            
                
            }}>-</button>

        </div>
       

        
    )
    
}

export default Counter
