import { useEffect, useState } from 'react';
import API from '../../utils/API';
import Table from '../../components/Table';
import TableRow from '../../components/TableRow';

function SinglePlayer(props) {
    const player = props.match.params.player;
    const [games, setGames] = useState([]);

    useEffect(() => {
        API.getGamesByPlayer(player)
        .then(data => {
            setGames(data.data);
        })
    }, [])

    return (
        <div>
            <div class="d-flex justify-content-center">
                <h1>{games[0] == undefined ? "" : games[0].Player.name}</h1>
            </div>
            <Table>
                <thead>
                    <TableRow>
                        <th scope="col">Opponent</th>
                        <th scope="col">Date</th>
                        <th scope="col">Fantasy Points</th>
                        <th scope="col">FG</th>
                        <th scope="col">3Pt</th>
                        <th scope="col">FT</th>
                        <th scope="col">Points</th>
                        <th scope="col">Rebounds</th>
                        <th scope="col">Assists</th>
                        <th scope="col">Steals</th>
                        <th scope="col">Blocks</th>
                        <th scope="col">Turnovers</th>
                    </TableRow>
                </thead>
                <tbody>
                    {games.map((game, i) => (
                        <TableRow key={i}>
                            <td>{game.opponent}</td>
                            <td>{game.date.substring(0, 10)}</td>
                            <td>{game.fantasyPoints}</td>
                            <td>{game.fgm} - {game.fga}</td>
                            <td>{game.tpm} - {game.tpa}</td>
                            <td>{game.ftm} - {game.fta}</td>
                            <td>{game.points}</td>
                            <td>{game.rebounds}</td>
                            <td>{game.assists}</td>
                            <td>{game.steals}</td>
                            <td>{game.blocks}</td>
                            <td>{game.turnovers}</td>
                        </TableRow>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default SinglePlayer;