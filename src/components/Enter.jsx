import $ from 'jquery'
import typewriterLineBreak from '../assets/sounds/typewriterLineBreak.mp3'

const Enter = ({ input, setInput, correctGuess, setCorrectGuess, word }) => {
    const handleClick = () => {
        let hasEmpty = false
        for(let i = input.length -1; i >= 0; i--){
            console.log(input[i])
            if (input[i] === ''){
                hasEmpty = true
            }
        }
        if (!hasEmpty){
            let audio = new Audio(typewriterLineBreak)
            audio.play()
            for (let i = 0; i < input.length; i++){
                if (word.includes(input[i])){
                    if(word[i] === input[i]){
                        $(`#${input[i]}`).css({'background-color': '#52D452'})
                        if (!correctGuess.includes(input[i])){
                            let copy = correctGuess
                            copy.push(input[i])
                            setCorrectGuess(copy)
                        }
                    } else {
                        if(!correctGuess.includes(input[i])){
                            $(`#${input[i]}`).css({'background-color': '#fdfd96'})
                        }
                    }
                } else {
                    $(`#${input[i]}`).css({'background-color': '#CCCCC4'})
                }
            }
            let emptyWord = []
            for (let i = 0; i < word.length; i++){
                emptyWord.push('')
            }
            setInput(emptyWord)
        } else {
            console.log('false')
        }
    }
    return (
        <button className="enter" onClick={handleClick}>ENTER</button>
    )
}

export default Enter