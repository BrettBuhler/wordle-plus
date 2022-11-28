import typewriterKey from '../assets/sounds/typewriterKey.mp3'

const Key = ({char, input, setInput, id }) => {

    const handleClick = (event) => {
        let isFull = true
        let newInput = [...input]
        for (let i = 0; i < newInput.length; i++){
            if (newInput[i] === ''){
                newInput[i] = event.target.value
                console.log(newInput)
                setInput(newInput)
                isFull = false
                let audio = new Audio(typewriterKey)
                audio.play()
                break
            }
        }
        if (isFull){
            //error
            console.log('it\'s full')
        }
    }
    return (
            <button value={char} onClick={handleClick} className={'key'} id={id}>{char}</button>
    )
}

export default Key