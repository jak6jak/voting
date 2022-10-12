import { MOVIE_DB_KEY } from '$env/static/private';
import {randomUUID} from 'node:crypto';

/** @type {import('./$types').Actions}*/
export const actions = {
    default: async ({ request }) => {
        //User submited movies

        const data = await request.formData();
        const rawMovieList = data.get("search");
        if (rawMovieList.length == 0) return [];

        const movieTitleList = rawMovieList?.match(/.+/g);;
        
        const movieData = await Promise.all(movieTitleList.map(async movie => {
            if (movie != '\n' && movie != '\r' && movie != "") {
                const resp = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_DB_KEY}&language=en-US&query=${encodeURIComponent(movie)}&page=1&include_adult=false`);
                const data = await resp.json();
                if(data.results.length == 0){
                data.results.push({
                    title: movie,
                    overview: "Not Found in database"
                })
            }
                data.ChosenMovieIndex = 0;
                data.id = randomUUID();
                return data;
            }

        }));
        console.log(movieData);
        return movieData;
    }
}
