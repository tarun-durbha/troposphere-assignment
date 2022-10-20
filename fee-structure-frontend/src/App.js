import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Fee from './Fee';
import Home from './Home';
import Courses from './Courses';
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseType from './CourseType';
function App() {
  return(
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/:examFee" element={<Fee/>}/>
          <Route path="/:applicationFee" element={<Fee/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/courseTypes" element={<CourseType/>}/>
          
          
        </Routes>
        </Router>
    </div>
  )
  
  
}

export default App;
