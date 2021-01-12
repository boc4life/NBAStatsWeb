import { useEffect, useState } from 'react';
import API from '../../utils/API';
import Table from '../../components/Table';
import TableRow from '../../components/TableRow';
import FilterColumns from '../../components/FilterColumns';

function SingleTeam(props) {
    const team = props.match.params.team;
    const [filterGames, setFilterGames] = useState("All")
    const [players, setPlayers] = useState([])
    const [filterPlayers, setFilterPlayers] = useState({data: []})
  
    const getPlayers = async () => {
        const results = await API.getTonightsGamesByTeam(team);
        setPlayers(results.data)
    }

    useEffect(() => {
        getPlayers();
    }, [])

    useEffect(() => {
        API.getStatsByFilters({filterGames, players})
        .then(data => {
            console.log(data)
            setFilterPlayers(data.data)
        })
    }, [filterGames, players])

    const handleFilterChange = event => {
        setFilterGames(event)
    }

    return (
            <div>
                {console.log(filterPlayers)}
                <FilterColumns handleChange={handleFilterChange} />
                <Table>
                    <thead>
                        <TableRow>
                            <th scope="col">Position</th>
                            <th scope="col">Name</th>
                            <th scope="col">Salary</th>
                            <th scope="col">Avg Points</th>
                            <th scope="col">Avg Rebounds</th>
                            <th scope="col">Avg Assists</th>
                            <th scope="col">Avg Steals</th>
                            <th scope="col">Avg Blocks</th>
                        </TableRow>
                    </thead>
                    <tbody>
                        {filterPlayers.data.map((player, i) => (
                            <TableRow key={i}>
                                <td>{player.position}</td>
                                <td><a href={"/players/" + player.playerId}>{player.name}</a></td>
                                <td>{player.salary}</td>
                                <td>{player.points.toFixed(2)}</td>
                                <td>{player.rebounds.toFixed(2)}</td>
                                <td>{player.assists.toFixed(2)}</td>
                                <td>{player.steals.toFixed(2)}</td>
                                <td>{player.blocks.toFixed(2)}</td>
                            </TableRow>
                        ))}
                    </tbody>
                </Table>
            </div>
    )

}

export default SingleTeam;