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
    }
}

export default API