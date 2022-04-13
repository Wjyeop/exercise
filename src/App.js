import React from 'react';
import logo from './logo.svg';
import Main from "./Main";
import StopWatch from './StopWatch';
import Yes from './Yes';
import Second from './Second';
import { BrowserRouter as Router, Route, Routes, link } from "react-router-dom";
import './App.css';

// function Home() {
//   function page(e) {
//     window.location.href = "/Second"
//   }
//   return(
//     <div onClick = {page}>
//       <h1>페이지이동</h1>
//     </div>
//   )
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div><Main/></div>
        <div><StopWatch/></div>
        <div><Yes /></div>

        {/* <Router>
          <div>
            <Routes>
              <Route path ="/Second">
                <Second/>          
              </Route>
            </Routes>
          </div>
        </Router> */}



        <a 
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
