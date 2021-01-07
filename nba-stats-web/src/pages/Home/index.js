import React, { useState, useEffect } from 'react';
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
            setGames(formattedArray);
        })
    }, []);

    return (
        <div>
            <ul>
            {games.map(game => (
                <div>
                    <p>{game.homeTeam} @ {game.awayTeam}</p>
                    <p>{game.time} - {game.date}</p>
                </div>
                ))}
            </ul>
        </div>
    )
}

export default Home;