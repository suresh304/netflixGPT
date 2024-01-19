import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
const [signInForm,setIsSignInForm] = useState(true)
    const toggleSignIn = ()=>{
setIsSignInForm(!signInForm)
    }
  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_medium.jpg" />
      </div>
      <form className="absolute p-12 bg-black w-1/5 mx-auto  right-0 left-0 my-36 text-white bg-opacity-80">
        <h1 className="text-3xl mx-4">{signInForm?"signUp":"signIn"}</h1>
        {signInForm&&<input type="text" placeholder="fullname" className="rounded-md p-4 my-4 w-full bg-zinc-800" />
        }<input type="text" placeholder="email or phone number" className="rounded-md p-4 my-4 w-full bg-zinc-800" />
        <input type="password" placeholder="password" className="p-4 my-4 rounded-md bg-zinc-800 w-full" />
        <button className="bg-red-500  w-full my-3 p-4 rounded-md">{signInForm?"signUp":"signIn"}</button>
        <p onClick={toggleSignIn}>{signInForm?"already registered? SignIn":"signup if dont have account"}</p>
      </form> 
    </div>
  );
};

export default Login;