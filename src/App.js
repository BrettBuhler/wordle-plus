import { useState, useEffect } from "react"
import Keyboard from "./components/Keyboard"
import GameBoard from "./components/GameBoard"
import EndScreen from "./components/EndScreen"
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

  if (userInput[userInput.length - 1]){
    if (userInput[userInput.length - 1].reduce((a,b)=>{return a+b[0]},'') == word){
      return (
        <div style={{background: 'linear-gradient(45deg, #00d2ff, #3a7bd5)', color: 'white', textAlign: 'center', padding: '50px'}} className="endScreen">
          <div className="topbar"><h1 className="title">Wordle Plus</h1></div>
          <EndScreen win={true} word={word}/>
        </div>
      )
    }
  }
  if(userInput.length === 6){
    return (
      <div style={{background: 'linear-gradient(to bottom, #444444, #cccccc)', color: 'white', textAlign: 'center', padding: '50px'}} className="endScreen">
        <div className="topbar"><h1 className="title">Wordle Plus</h1></div>
        <EndScreen win={false} word={word}/>
      </div>
    )
  }
  return (
    <div>
      <div className="topbar"><h1 className="title">Wordle Plus</h1></div>
      <GameBoard input={input} userInput={userInput}/>
      <Keyboard input={input} setInput={setInput} correctGuess={correctGuess} setCorrectGuess={setCorrectGuess} word={word} setUserInput={setUserInput} userInput={userInput}/>
    </div>
  )
}

export default App
