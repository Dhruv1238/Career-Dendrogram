import { useState } from 'react'
import './App.css'

import Homepage from './pages/homepage/homepage';
import Career from './pages/career/career';
import Login from './pages/login/login';
import Signup from './pages/login/signup';

import Navbar  from "./components/navbar/navbar.jsx";
import Gpt from "./components/gpt/gpt.jsx";
import Footer  from './components/footer/footer.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <>

    
    
    {/* <Gpt /> */}
    <Router>
      <Navbar />
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/careers" element={<Career />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    </Routes>
      <Footer />
    </Router>
    </> 
  )
}

export default App

  // async function handleSubmit() {
  //   const prompt = `Based on these interests: ${interests}, here are some career options:`;
  //   const generatedText = await generateText(prompt);
  //   setText(generatedText);
  //   console.log("clicked");
  // }
