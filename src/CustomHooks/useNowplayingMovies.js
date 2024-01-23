import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useNowPlayingMovies = async ()=>{
    const dispatch = useDispatch()

  const getNowPlayingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results))
    console.log(json);
  };

  useEffect(() => {
    getNowPlayingMovie();

  }, []);
}
export default useNowPlayingMovies