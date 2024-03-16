import { useState } from "react";
import Header from "./Header";


const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignIn = () =>{
setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header/>
      <div className="absolute">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9c5457b8-9ab0-4a04-9fc1-e608d5670f1a/710d74e0-7158-408e-8d9b-23c219dee5df/IN-en-20210719-popsignuptwoweeks-perspective_alpha_website_small.jpg"
      alt="backgorund"/>
      </div>
      <form className="w-4/12 absolute p-12 bg-black  my-24 mx-auto right-0 left-0 text-white rounded-lg  bg-opacity-80">
        <h1 className="font-bold text-3xl py-4  ">{ isSignInForm  ? "Sign in" : "Sign up"}</h1>
        {! isSignInForm && (<input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700 rounded-lg "/>)}
        <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700 rounded-lg "/>
        {! isSignInForm && (<input type="text" placeholder="Phone Number" maxLength={10} className="p-4 my-4 w-full bg-gray-700 rounded-lg "/>)}
        <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700 rounded-lg "/>
        <button className="p-4 my-6  bg-red-700 w-full rounded-lg">{ isSignInForm ? "Sign In" : "Sign up"}</button>
        <p className="py-4 cursor-pointer " onClick={toggleSignIn}>{ isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered ! Sign in now"}</p>
             </form>
    </div>
    
  )
}

export default Login ;  