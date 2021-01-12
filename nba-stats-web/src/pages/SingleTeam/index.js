import { useEffect, useState } from 'react';
import API from '../../utils/API';
import Table from '../../components/Table';
import TableRow from '../../components/TableRow';
import FilterColumns from '../../components/FilterColumns';

function SingleTeam(props) {
    const team = props.match.params.team;
    const [filterGames, setFilterGames] = useState("All")
    const [players, setPlayers] = useState([])

    useEffect(() => {
        API.getTonightsGamesByTeam(team)
        .then(data => {
            console.log(data)
            setPlayers(data.data);
        })
    }, [])

    useEffect(() => {
        API.getStatsByFilters({filterGames, players})
        .then(data => {
            console.log(data)
        })
    }, [filterGames, players])

    const handleFilterChange = event => {
        console.log(event);
    }

    return (
            <div>
                <FilterColumns handleChange={handleFilterChange} />
                <Table>
                    <thead>
                        <TableRow>
                            <th scope="col">Position</th>
                            <th scope="col">Name</th>
                            <th scope="col">Salary</th>
                            <th scope="col">Avg Points Per Game</th>
                        </TableRow>
                    </thead>
                    <tbody>
                        {players.map((player, i) => (
                            <TableRow key={i}>
                                <td>{player.position}</td>
                                <td>{player.name}</td>
                                <td>{player.salary}</td>
                                <td>{player.avgPointsPerGame}</td>
                            </TableRow>
                        ))}
                    </tbody>
                </Table>
            </div>
    )

}

export default SingleTeam;