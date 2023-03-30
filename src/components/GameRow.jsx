const GameRow = ({ toDisplay }) => {
    console.log('toDisplay', toDisplay)
    return (
        <div className="gameRow">
            {toDisplay.map((x,i)=><div id={x} key={i*33} className='displayKey' style={{backgroundColor: x[1]}}>{x[0]}</div>)}
        </div>
    )
}

export default GameRow