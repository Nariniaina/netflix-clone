import React, { useState, useEffect } from 'react'
import './Banner.css'
// Axios of our local axios
import axios from './axios';
import requests from "./Requests"

function Banner() {
    const [movie, setMovie] = useState([]);

    // This is how we use our TMDB API
    // After this we use information we get in the API and drop
    // to our banner
    useEffect(() => {
        async function fetchData() {
            // get request
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }

        fetchData();
    }, [])

    console.log(movie);

    // if the text description is too long : ellipsis function
    function truncate(string, n) {
        return string?.length > n ? string.substring(0, n - 1) + '...' : string;
    }

    return (
        <div className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
            backgroundPosition: "center center",
            backgroundPositionY: -24,
            backgroundRepeat: "no-repeat"
        }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(movie?.overview, 150)}   
                </h1>
            </div>
            
            <div className="banner--fadeBottom"></div>
        </div>
    )
}

export default Banner
