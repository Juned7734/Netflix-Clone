import React, { useState, useEffect } from 'react'
import './css/Banner.css'
import requests from './request';
import axios from "./axios";
function Banner() {
  const [movies, setMovies] = useState([])
  useEffect(() => {

    async function fetchBanner() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      let data = request.data.results;
      setMovies(data[Math.floor(Math.random() * data.length - 1)]);
      return data[Math.floor(Math.random() * data.length - 1)];

    }

    fetchBanner();

  }, [])

  function truncate(str,n) {

      return str?.length > n ? str.substr(0,n-1) +"..." :str;
  }

  console.log(movies);
  return (
    <div className='banner' style={{
      backgroundSize: "cover",
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies && movies.backdrop_path}")`,
      backgroundPosition: "top  center",
      opacity:'1'
    }}>

        <div className="banner_contents">
        <h1 className='banner_title'>{movies.title || movies.name || movies.original_name}</h1>
        <div className="banner_buttons">
          <button className='banner_button'>Play</button>
          <button className='banner_button'>My List</button>
        </div>
        <h1 className='banner_description'> {movies&&truncate(movies.overview,150 )}</h1>
      </div>
      <div className="banner_fade_bottom"></div>
    </div>
  )
}

export default Banner