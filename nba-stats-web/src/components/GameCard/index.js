function GameCard(props) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">
                    <a href={"/teams/" + props.awayTeam}>{props.awayTeam}</a>
                    @
                    <a href={"/teams/" + props.homeTeam}>{props.homeTeam}</a>
                </h5>
                <h6 className="card-subtitle">
                    {props.date} - {props.time}
                </h6>
            </div>
        </div>
    )
}

export default GameCard;