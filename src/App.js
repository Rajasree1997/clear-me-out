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
          <Route path="category/:title" element={<Category/>}/>
          <Route path="question" element={<Question/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="signup" element={<Signup/>}/>
          <Route path="ask" element={<Ask/>}/>
          <Route path="post" element={<Post/>}/>
          <Route path="feedback" element={<Feedback/>}/>
       </Route>

      </Routes>
   
  );
}

export default App;
