import axios from "axios";

const API = {
    getTonightsGames: () => {
        return axios.get("/api/games/tonight");
    }
}

export default API