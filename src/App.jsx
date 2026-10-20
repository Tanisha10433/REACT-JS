import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Course from './components/Course';
import Signup from './components/Signup';
import Login from './components/login';
import './App.css';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home name="Ankush" />} />
        <Route path="/course" element={<Course />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App;