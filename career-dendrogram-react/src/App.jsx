import { useState } from 'react'
import './App.css'
import Navbar  from "./components/navbar/navbar.jsx";
import Gpt from "./components/gpt/gpt.jsx";
import Footer  from './components/footer/footer.jsx';



function App() {
  
  return (
    <div className="App">
    <Navbar />
    <Gpt />
    <div className="wrapper">
      <Footer />
    </div>
    </div> 
  )
}

export default App

  // async function handleSubmit() {
  //   const prompt = `Based on these interests: ${interests}, here are some career options:`;
  //   const generatedText = await generateText(prompt);
  //   setText(generatedText);
  //   console.log("clicked");
  // }
