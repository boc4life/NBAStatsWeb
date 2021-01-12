import axios from "axios";

const API = {
    getTonightsGames: () => {
        return axios.get("/api/games/tonight");
    },

    getTonightsGamesByTeam: (team) => {
        return axios.get("/api/teams/tonight/" + team)
    },

    getStatsByFilters: (filters) => {
        return axios.post("/api/teams/filterStats/", filters)
    },

    getGamesByPlayer: (player) => {
        return axios.get("/api/players/" + player)
    }
}

export default API