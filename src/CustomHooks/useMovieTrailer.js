import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovietrailer = (movieId) =>{
    const dispatch = useDispatch();
  
    const getMovieVideos = async () => {
      const data = fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const movieVideos = await (await data).json();
      const trailers = movieVideos.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = trailers.length ? trailers[0] : movieVideos.results[0];
      dispatch(addTrailerVideo(trailer));
    };
    useEffect(() => {
      getMovieVideos();
    },[]);
}

export default useMovietrailer