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
const reducer =(state=[],action)=>
{
  //state was 0
    switch (action.type) {
            case 'Add_Todo':// case 'DECREMENT':
             return [...state,action.value];//  return state-1
           //  case 'INCREMENT':
             //  return state+1
            case 'Remove_Todo':
              return state.filter((_value,i)=>i !==action.index)
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
