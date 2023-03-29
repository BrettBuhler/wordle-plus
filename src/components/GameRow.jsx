const GameRow = ({toDispaly}) => {
    return (
        <div className="gameRow">
            {toDispaly.map(x=><div id={x}>{x}</div>)}
        </div>
    )
}