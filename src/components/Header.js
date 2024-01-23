import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { USER_LOGO,NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log("header user", user);
  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        // navigate("/error");
      });
  };


  useEffect(() => {
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;

        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //this will be unsubscribed when component unmounts
    return ()=>unsubscribe()
  }, []);


  return (
    <div className="absolute w-screen flex justify-between px-5 bg-gradient-to-b from-black z-10">
      <img
        src={NETFLIX_LOGO}
        alt="netflix logo"
        className="w-44"
      />
      {user && (
        <div className="flex">
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
