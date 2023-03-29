import Key from './Key'
import Backspace from './Backspace'
import Enter from './Enter'

const Keyboard = ({ input, setInput, correctGuess, setCorrectGuess, word, setUserInput, userInput }) => {
    let items = ['', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P','','','A','S','D','F','G','H','J','K','L','BACK','','','Z','X','C','V','B','N','M','','ENTER']
    return (
        <div id='keyboard'>
            {items.map((x,i)=>{
                if (x === 'BACK'){
                    return (
                        <Backspace input={input} setInput={setInput} key={i}/>
                    )
                } else if (x === 'ENTER'){
                    return (
                        <Enter input={input} setInput={setInput} correctGuess={correctGuess} setCorrectGuess={setCorrectGuess} key={i} word={word} setUserInput={setUserInput} userInput={userInput}/>
                    )
                } else if (x === ''){
                    return (
                        <div key={i}></div>
                    )
                } else {
                    return (
                        <Key input={input} setInput={setInput} char={x.toString()} key={i} id={x}/>
                    )
                }
            })}
        </div>
    )
}

export default Keyboard