import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/valid";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [signInForm, setIsSignInForm] = useState(true);
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const email = useRef();
  const name = useRef();
  const password = useRef();
  console.log(email, password);
  const toggleSignIn = () => {
    setIsSignInForm(!signInForm);
  };
  const handleButtonClick = () => {
    setError(checkValidData(email.current.value, password.current.value));

    if (checkValidData(email.current.value, password.current.value)) return;
    console.log(!signInForm);
    if (!signInForm) {
      // signUp

      // const auth = getAuth();
      console.log("enter in to signup");
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("userDetails>>>>>>>", user);
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((e) => {
              console.log(e);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      // signin

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("user>>>>>>>>>>>", user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
        });
    }
  };
  
  return (
    
    <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_medium.jpg')]">
    
      <Header />
      {/* <div className="">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_medium.jpg" className="bg-cover w-[100%] h-[100%]"/>
      </div> */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black w-1/5 mx-auto  right-0 left-0 my-36 text-white bg-opacity-80"
      >
        <h1 className="text-3xl mx-4">{!signInForm ? "signUp" : "signIn"}</h1>
        {!signInForm && (
          <input
            type="text"
            placeholder="fullname"
            className="rounded-md p-4 my-4 w-full bg-zinc-800"
            ref={name}
          />
        )}
        <input
          type="text"
          placeholder="email or phone number"
          className="rounded-md p-4 my-4 w-full bg-zinc-800"
          ref={email}
        />
        <input
          type="password"
          placeholder="password"
          className="p-4 my-4 rounded-md bg-zinc-800 w-full"
          ref={password}
        />
        <h1 className="text-red-700">{error}</h1>
        <button
          className="bg-red-500  w-full my-3 p-4 rounded-md"
          onClick={handleButtonClick}
        >
          {!signInForm ? "signUp" : "signIn"}
        </button>
        <p onClick={toggleSignIn}>
          {!signInForm
            ? "already registered? SignIn"
            : "signup if dont have account"}
        </p>
      </form>
    </div>
  );
};

export default Login;
