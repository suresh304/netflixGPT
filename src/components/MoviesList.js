import React, { useState } from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
//   console.log(title, movies, "<<<<<<<<<<<<<<<<<<<<<secondary");
// const [movies1,setMovies] = useState(movies)

  return movies&&(
    <>
    
      <div className="bg-black">
        <h1 className="text-2xl p-2 mx-3 text-white">{title}</h1>
      </div>
      <div className="flex overflow-x-scroll bg-black">
        <div className="flex">
          {movies?.map((movie, i) => (
            <MovieCard {...movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MoviesList;
