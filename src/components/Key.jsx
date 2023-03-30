import { useEffect } from 'react'
import typewriterKey from '../assets/sounds/typewriterKey.mp3'

const Key = ({char, input, setInput, id }) => {

    useEffect(()=>{
        const handleKeyPress = (event) => {
            if (event.key.toUpperCase() === char){
                let isFull = true
                let newInput = [...input]
                for (let i = 0; i < newInput.length; i++){
                    if (newInput[i] === ''){
                        newInput[i] = char
                        setInput(newInput)
                        isFull = false
                        let audio = new Audio(typewriterKey)
                        audio.play()
                        break
                    }
                }
                if (isFull){
                console.log('Cannot hold more characters')
                }
            }
        }
        document.addEventListener('keyup', handleKeyPress)
        return () => {
            document.removeEventListener('keyup', handleKeyPress)
        }
    },input)

    const handleClick = (event) => {
        let isFull = true
        let newInput = [...input]
        let value = event.target.value
        for (let i = 0; i < newInput.length; i++){
            if (newInput[i] === ''){
                newInput[i] = value
                setInput(newInput)
                isFull = false
                let audio = new Audio(typewriterKey)
                audio.play()
                break
            }
        }
        if (isFull){
            console.log('cannot hold more characters')
        }
    }
    return (
            <button value={char} onClick={handleClick} className={'key'} id={id}>{char}</button>
    )
}

export default Key