import backspace from '../assets/sounds/backspace.mp3'

const Backspace = ({ input, setInput }) => {
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