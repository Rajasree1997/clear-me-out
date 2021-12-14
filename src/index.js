import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import App from './App';
import {createStore} from "redux"
import {Provider} from "react-redux"
import postTodo from './service/postTodo';
const reducer =(state=
  {
    todos:[],
    counter:0,
    isLoggedIn:false
  },
    action)=>
{
  let updatedList;
  //state was 0
    switch (action.type) {
            case 'Add_Todo':// case 'DECREMENT':
               updatedList = [...state.todos,action.value]
              postTodo(updatedList)
             return {
               ...state,
               todos:updatedList};//  return state-1
           //  case 'INCREMENT':
             //  return state+1
            case 'Remove_Todo':
              updatedList=state.todos.filter((_value,i)=>i !==action.index);
              postTodo(updatedList);
              return {
                ...state,
                todos:updatedList};
                case 'create':
                  return {
                    ...state,
                    todos:action.data} 
            case 'Increment':
              return {
                ...state,
                counter:state.counter+1}
                case 'Decrement':
                  return {
                    ...state,
                    counter:state.counter-1
                    }
                case 'LoggedIn' :
                  return{
                    ...state,
                    isLoggedIn:true
                  }
                  case 'LoggedOut' :
                  return{
                    ...state,
                    isLoggedIn:false
                  }

             default:
             return state
                } 
    
}
const store=createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
// }
// store.subscribe(render);
// render()
