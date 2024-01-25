import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch,useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import useNowPlayingMovies from "../CustomHooks/useNowplayingMovies";
import Maincontainer from "./Maincontainer";
import GptSearchPage from "./GptSearchPage";
import { Seconderycontainer } from "./Seconderycontainer";
import usePopularMovies from "../CustomHooks/usePopularMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  const gpt = useSelector((state) => state.gpt);


  return (
    <div>
      <Header />
     {!gpt.gptSearch?<> <Maincontainer/>
      <Seconderycontainer/></>:<GptSearchPage/>}
    </div>
  );
};

export default Browse;
