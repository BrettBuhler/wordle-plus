const GameRow = ({ toDisplay }) => {
    return (
        <div className="gameRow">{toDisplay.map((x,i)=>{
            return <div className="displayKey" style={{backgroundColor: x[1]}} key={i*321}><div className="displayDiv">{x[0]}</div></div>
        })}</div>
    )
}

export default GameRow
