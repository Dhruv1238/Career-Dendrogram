import { useState } from 'react'
import './App.css'
import Navbar  from "./components/navbar/navbar.jsx";
import { generateText } from './components/gpt/gpt.jsx'


async function handleClick() {
  const prompt = 'Hello, GPT-3!';
  const generatedText = await generateText(prompt);
  setText(generatedText);
}

function App() {
  return (
    <>
    <Navbar />
    
    {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}
    </> 
  )
}

export default App
