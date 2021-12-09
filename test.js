// const {createStore} = require("redux")
// console.log(createStore);
// const reducer =(state=[],action)=>
//     {
//         switch (action.type) {
//           case 'ADD_TODO':
//             return [...state,action.text]
//           default:
//             return state
//         }
//       }
//       const store = createStore(reducer,["new"]);
//       const addTodo =text=>({
     
      
//         type: 'ADD_TODO',
//         text
//       })
//       store.dispatch(addTodo("add to do"));
//       store.dispatch(addTodo("add to do 2"));
//       console.log(store.getState());
const {createStore} = require("redux")
const reducer =(state=0,action)=>
{
    switch (action.type) {
            case 'DECREMENT':
             return state-1
             case 'INCREMENT':
             return state+1
             
             default:
             return state
                } 
    
}
const store=createStore(reducer);
const unsubscribe=store.subscribe(()=>{
    console.log(store.getState());
})
store.dispatch({
    type: "INCREMENT"
});
store.dispatch({
    type: "INCREMENT"
});
unsubscribe()
store.dispatch({
    type: "DECREMENT"
});


