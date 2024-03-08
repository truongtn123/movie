import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
//directly
// const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2RhY2ZhZGJjNTZkZjBiNDI5ZDViOGQ0ZDg3MDk2MCIsInN1YiI6IjY1ZGQ4YTg2OTAzYzUyMDE2M2JjNWRkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nKJFzukuraj3rbdzoyJtIevZtBft_f8YqOgKWF_bj4o"

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        //destructuring
        // const { data } = await axios.get(BASE_URL + url, {
        //     headers,
        //     params,
        // });
        // return data;

        const res = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        // console.log(res);
        const data = res.data;
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};