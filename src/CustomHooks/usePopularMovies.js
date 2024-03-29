import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = async () =>{
    const dispatch = useDispatch()

  const getPopularMovie = async () => {
    console.log("hello")
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addPopularMovies(json.results))
    console.log(json);
  };

  useEffect(() => {
    getPopularMovie();

  }, []);
}
export default usePopularMovies