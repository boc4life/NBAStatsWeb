import axios from "axios";

const API = {
    getTonightsGames: () => {
        return axios.get("/api/games/tonight");
    },

    getTonightsGamesByTeam: (team) => {
        return axios.get("/api/teams/tonight/" + team)
    }
}

export default API