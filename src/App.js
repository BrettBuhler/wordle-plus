import { useState, useEffect } from "react"
import Key from './components/Key'
import Backspace from './components/Backspace'
import Enter from './components/Enter'
import Keyboard from "./components/Keyboard"
import GameBoard from "./components/GameBoard"
var randomWords = require('random-words')

const App = () => {
  const [input, setInput] = useState(['','','','',''])
  const [word, setWord] = useState('')
  const [correctGuess, setCorrectGuess] = useState([])
  const [userInput, setUserInput] = useState([])


  useEffect(()=>{
    let randomWord = ['test']
    while (randomWord[0].length !== 5){
      randomWord = randomWords({exactly:1, maxLength: 5})
    }
    console.log(randomWord)
    setUserInput([])
    setWord(randomWord[0].toUpperCase())
  },[])


  return (
    <div>
      <div className="topbar"><h1 className="title">Wordle Plus</h1></div>
      <GameBoard input={input} userInput={userInput}/>
      <div>{input.map((x,i)=><div key={i}>{x}</div>)}</div>
      <Keyboard input={input} setInput={setInput} correctGuess={correctGuess} setCorrectGuess={setCorrectGuess} word={word} setUserInput={setUserInput} userInput={userInput}/>
    </div>
  )
}

export default App
