import { useState, useEffect } from "react"
import Key from './components/Key'
import Backspace from './components/Backspace'
import Enter from './components/Enter'
import Keyboard from "./components/Keyboard"

const App = () => {
  const [input, setInput] = useState(['','','','',''])
  const [word, setWord] = useState('')
  const [correctGuess, setCorrectGuess] = useState([])

  useEffect(()=>{
    setWord('HAPPY')
  },[])
  return (
    <div>
      <div className="topbar"><h1 className="title">Wordle Plus</h1></div>
      <div>{input.map((x,i)=><div key={i}>{x}</div>)}</div>
      <Keyboard input={input} setInput={setInput} correctGuess={correctGuess} setCorrectGuess={setCorrectGuess} word={word} />
    </div>
  )
}

export default App
