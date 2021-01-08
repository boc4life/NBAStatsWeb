import { useEffect } from 'react';
import API from '../../utils/API';

function SingleTeam(props) {
    const team = props.match.params.team;

    useEffect(() => {
        API.getTonightsGamesByTeam(team)
        .then(data => {
            console.log(data)
        })
    }, [])

    return (
            <div>
                {props.match.params.team}
            </div>
    )

}

export default SingleTeam;