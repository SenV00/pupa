import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Home } from './Home';
import { About } from './About';
import { Contacts } from './Contacts';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contacts" element={<Contacts/>} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
