// npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
// npm install @mui/icons-material
import './App.css';
import React from 'react';
import Profile from './Component/Profile';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Spinach from './Component/Spinach';
import Popeye from './Component/Popeye';
import ErrorPage from './Component/ErrorPage';
import Image from './Image';

function App() {
  return (
    <Router >
      <div className="App">
        <h1>Hello from the main page of the app!</h1>
        <p>Here are some examples of links to other pages</p>
          <ul>
            <li>  <Link to='/profile'>Profile</Link>  </li>
            <li>  <Link to='/spinach'> Spinach</Link>  </li>
            <li>  <Link to='/popeye'> Popeye</Link>  </li> 
          </ul>
       <span> <Link to='/error' > Error </Link> </span> <br/> <br />
     </div>  
           <hr />
       <Image/>

        <Routes>
          <Route path='/'   />
          <Route path='/profile' element={<Profile />} />
          <Route path='/spinach' element={ <Spinach />} />
          <Route path='/popeye' element={<Popeye/>} />
          <Route path='/error' element={<ErrorPage/>} />
        </Routes>

    </Router>
  );
}

export default App;
