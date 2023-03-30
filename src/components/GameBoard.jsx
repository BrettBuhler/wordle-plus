import { useEffect } from 'react'
import { useState } from 'react'
import GameRow from './GameRow'

const GameBoard = ({input, userInput, setUserInput}) => {
  
    const [gameState, setGameState] = useState([])
    useEffect(()=>{
        if (userInput.length < 6){
            let index = 6 - userInput.length
            let arr = []
            for (let i = 0; i < index; i++){
                arr.push(['','','','',''])
            }
            setGameState(userInput.concat(arr))
        }
    },[])

    const displayFunction = (arr, num, x) => {
        if (arr[num]){
            return arr[num]
        } else if (num == arr.length){
            return input.map(x=>[x, '#eee'])
        } else {
            return x.map(x=>[x,'#eee'])
        }
    }
    if (userInput.lenth + gameState.length > 6){
        setGameState(gameState.slice(0,gameState.length-2))
    }
    return (
        <div id="gameBoard">
            {gameState.map((x,i)=><GameRow toDisplay={displayFunction(userInput, i, x)} key={i*732}/>)}
        </div>
    )
}

export default GameBoard