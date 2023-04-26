import { useState } from 'react'
import './App.css'
import Navbar  from "./components/navbar/navbar.jsx";
import  generateText  from './components/gpt/gpt.jsx'




function App() {
  const [typing,setTyping]=useState(false);
  const [interests, setInterests] = useState('');
  const [text, setText] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setTyping(true);
    const prompt = `Based on these interests: ${interests}, here is the list of 5 potential career options:`;
    console.log(prompt);
    const generatedText = await generateText(prompt);
    console.log(generatedText);
  
    if (generatedText) {
      setText(generatedText);
      setTyping(false);
    } else {
      console.error("Empty text output");
      setTyping(false);
    }
  }
  
  return (
    <>
    <Navbar />
    <div>
      <h1>GPT-3 Career Generator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
          placeholder="Enter your interests"
        />
        <button type="submit">Generate</button>
      </form>
      <div type="text-output">
        {typing ? "Generating..." : null}
      </div>
      <div className="text-output">
        <p>{text}</p>
      </div>
    </div>
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
