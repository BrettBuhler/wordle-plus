import { useEffect } from 'react'
import backspace from '../assets/sounds/backspace.mp3'

const Backspace = ({ input, setInput }) => {
    
    useEffect(()=>{
        const handleKeyPress = (event) => {
            if(event.key === 'Backspace') {
                handleClick()
            }
        }
        document.addEventListener('keydown', handleKeyPress)
        return () => {
            document.removeEventListener('keydown', handleKeyPress)
        }
    },input)

    const handleClick = () => {
        let index = false
        for (let i = input.length - 1; i >= 0; i--){
            if (input[i] !== ''){
                index = i
                break
            }
        }
        if (index === false){
            console.log('Empty input')
        } else {
            let audio = new Audio(backspace)
            audio.play()
            let newInput = [...input]
            newInput[index] = ''
            setInput(newInput)
        }
    }
    return (
        <button className='backspace' onClick={handleClick}></button>
    )
}

export default Backspace