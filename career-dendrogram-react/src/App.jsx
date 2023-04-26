import { useState } from 'react'
import './App.css'
import Navbar  from "./components/navbar/navbar.jsx";
import  generateText  from './components/gpt/gpt.jsx'




function App() {

  const [text, setText] = useState('');
  
  async function handleClick() {
    const interests="Computer, IT"
    const prompt = `Based on these interests: ${interests}, here are some career options:`;
    const generatedText = await generateText(prompt);
    setText(generatedText);
    console.log("clicked");
  }

  return (
    <>
    <Navbar />
    <div>
      <h1>GPT-3 Career Generator</h1>
      <button onClick={handleClick}>Generate Text</button>
      <p>{text}</p>
    </div>
    </> 
  )
}

export default App
