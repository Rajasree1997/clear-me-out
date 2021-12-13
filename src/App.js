import { Route,Routes } from 'react-router';
import './App.css';
import Home from './Routes/Home';
import Category from './Routes/Category';
import Question from './Routes/Question';
import Login from './Routes/Login';
import Signup from './Routes/Signup';
import Ask from './Routes/Ask';
import Post from './Routes/Post';
import Feedback from './Routes/Feedback';
import LayOut from './LayOut';
import Demo from './demo/Demo';
import Answer from './Routes/Answer';
import Counter from './Counter';
import TodoRedex from './TodoRedex';
// import Rajasree from './Rajasree';
//home page
// category page
// question page
// login
// signUp page
// ask question
// post answer
// feedback

function App() {
  return (
    
      <Routes>
        <Route path="" element={<LayOut/>}>
          <Route path="" element={<Home/>}/>
          <Route path="todoredex" element={<TodoRedex/>}/>
          <Route path="category/:title" element={<Category/>}/>
          <Route path="question" element={<Question/>}/>
          <Route path="counter" element={<Counter/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="signup" element={<Signup/>}/>
          <Route path="ask" element={<Ask/>}/>
          <Route path="post" element={<Post/>}/>
          {/* <Route path="rajasree" element={<Rajasree/>}/> */}
          <Route path="feedback" element={<Feedback/>}/>
          <Route path="answer" element={<Answer/>}/>  
          <Route path="demo" element={<Demo/>}/>
       </Route>

      </Routes>
   
  );
}

export default App;
