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

const reducer =(state=[],action)=>
{
  //state was 0
    switch (action.type) {
            case 'ADD_TODO':// case 'DECREMENT':
             return[...state,action.value];//  return state-1
            case 'DELETE_TODO'://  case 'INCREMENT':
            return state;//  return state+1
             
             default:
             return state
                } 
    
}
const store=createStore(reducer);
const render=()=>{
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App store={store}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);}
store.subscribe(render);
render()
