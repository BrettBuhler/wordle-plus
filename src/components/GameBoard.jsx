import GameRow from './GameRow'

const GameBoard = ({input, userInput}) => {
    return (
        <div id="gameBoard">
            {userInput.map(x=><div className="displayKey">{x}</div>)}
        </div>
    )
}

export default GameBoard