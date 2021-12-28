import React, { useState, useEffect } from "react";
//we are importing instance from our axios file ...we can keep the name as whatever if we have done a default export.
import axios from "./axios"; 
import "./Row.css";
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

    //A snippet of code which runs based on a specific condition
  useEffect(() => {
    //if [] ,run once when the row loads, and dont run again
    /*Since we are fetching data from a 3rd party it might take a half a second or so 
    so we are using async as we want to proceed only after data has been fetched. */
    async function fetchdata() {
      const request = await axios.get(fetchUrl);
      console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchdata();
  }, [fetchUrl]);//if we use any variable from outside the useeffect block then we have have to add it as a dependency ..coz we r being dependent on that 
                 //not putting it as a dependency could end up in giving some unexpected error

  return (
    <div className="row">
      {/*tittle*/}
      <h2>{title}</h2>
      <div className="row_posters">
        {/*several row posters */}

        {movies.map((movie) => {
          <img
            key={movie.id}
            className="row__poster"
            src={movie.poster_path}
            alt={movie.name}
          />;
        })}
      </div>

      {/* {container ->posters} */}
    </div>
  );
}

export default Row;
