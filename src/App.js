
import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from "./Pages/Layout";
import DashBoard from "./Pages/DashBoard";
import Navbar from "./Components/Navbar";
import BoardPage from "./Pages/BoardPage";
import {useState} from "react";

function App() {
    return (
      <BrowserRouter>
          <Routes>
              <Route path={'/'} element={<Layout/>}></Route>
              <Route path={'board/:id'} element={<BoardPage/>}/>
          </Routes>
    </BrowserRouter>
);
}


export default App;
