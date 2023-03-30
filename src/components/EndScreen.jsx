const EndScreen = ({ win, word }) => {

    const winMessage = `You win!\nThe word was ${word}.`
    const loseMessage = `You lost :(.\nThe word was ${word}`

    const messageFucntion = (bool) => {
        if (bool) return winMessage
        return loseMessage
    }

    const playAgain = () => {
        window.location.reload()
    }

    return (
        <div className="endDiv">
            <div className="endMessage">{messageFucntion(win)}</div>
            <button onClick={playAgain} className="play-again-button">Play Again</button>
        </div>
    )
}

export default EndScreen