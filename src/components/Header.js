import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { USER_LOGO, NETFLIX_LOGO } from "../utils/constants";
import { SUPPORTED_LANG } from "../utils/langConstants";
import { handleGptSearch } from "../utils/gptSlice";
import { addLanguages } from "../utils/LangSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const gpt = useSelector((state) => state.gpt);
  const lang = useSelector((state) => state.lang);
  console.log(user, "HHHHHHHHHHHHHHHHHHHHHHHHHH");
  const [gptSearch, setGptSearch] = useState(false);
  console.log("header user", user);
  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        console.log("signing out.......")
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        // navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;

        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        console.log(">>>>>>>>>>>>>>signout")
        navigate("/");
      }
    });

    //this will be unsubscribed when component unmounts
    return () => unsubscribe();
  }, []);
  const gptSearchHandler = () => {
    dispatch(handleGptSearch(!gpt.gptSearch));
  };

  const langSelector = (e) => {
    console.log(e.target.value, "EEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
    dispatch(addLanguages(e.target.value));
  };

  return (
    <div className="absolute w-screen flex justify-between px-5 bg-gradient-to-b from-black z-10">
      <img src={NETFLIX_LOGO} alt="netflix logo" className="w-44" />
      {user && (
        <div className="flex">
          <select className="m-3 w-24" onChange={langSelector}>
            {SUPPORTED_LANG.map((lang) => (
              <option value={lang.langName}>{lang.langName}</option>
            ))}
          </select>
          <button
            className="mx-4 font-bold text-white bg-slate-400 m-3 w-40 "
            onClick={gptSearchHandler}
          >
            GPTsearch
          </button>
          <img
            src={USER_LOGO}
            alt="user logo"
            className="w-14 h-14 my-3 rounded-md"
          />
          <button
            className="mx-4 font-bold text-white"
            onClick={signOutHandler}
          >
            signout[{user.displayName}]
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
