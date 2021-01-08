import React, { useState, useEffect } from 'react';
import GameCard from '../../components/GameCard';
import API from '../../utils/API';

function Home() {
    const [games, setGames] = useState([])

    useEffect(() => {
        API.getTonightsGames()
        .then(res => {
            let formattedArray = [];
            for (let i = 0; i < res.data.length; i++) {
                let obj = {};
                let splitString = res.data[i].gameInfo.split(" ");
                let splitTeams = splitString[0].split("@")
                obj.awayTeam = splitTeams[0];
                obj.homeTeam = splitTeams[1];
                obj.date = splitString[1];
                obj.time = splitString[2] + " " + splitString[3];
                formattedArray.push(obj);
                console.log(formattedArray)
            }
            formattedArray.sort((a, b) => (a.time > b.time) ? 1 : -1)
            setGames(formattedArray);
        })
    }, []);

    return (
        <div>
            <h1>Tonight's Games</h1>
            {games.map((game, i) => (
                <GameCard
                key={i}
                awayTeam={game.awayTeam}
                homeTeam={game.homeTeam}
                date={game.date}
                time={game.time}
                />
                ))}
        </div>
    )
}

export default Home;