import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import useNowPlayingMovies from "../CustomHooks/useNowplayingMovies";
import Maincontainer from "./Maincontainer";
import { Seconderycontainer } from "./Seconderycontainer";
import usePopularMovies from "../CustomHooks/usePopularMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      <Maincontainer/>
      <Seconderycontainer/>
    </div>
  );
};

export default Browse;
