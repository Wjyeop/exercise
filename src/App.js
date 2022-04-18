import React from 'react';
import Main from "./Main";
import Second from './Second';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';



function App() {
  return (

        <BrowserRouter>
          <React.Fragment>
            <Routes>
              <Route path ='/' element ={<Main/>} />
              <Route path ='/Second' element ={<Second/>} />
            </Routes>     
          </React.Fragment>
        </BrowserRouter>
         
  );
}

export default App;
