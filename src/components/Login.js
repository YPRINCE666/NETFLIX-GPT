import { useState , useRef } from "react";

import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG } from "../utils/constatnts";

const Login = () => {
  
  const dispatch=useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage]=useState(null);
const email=useRef(null);
const password=useRef(null);
const name=useRef(null)
//const name=useRef(null)

  const handleButtonClick = () =>{
    
    // validating the form data
   
     const msg=checkValidateData(email.current.value , password.current.value)
     setErrorMessage(msg);
     if(msg) return;

     //SING IN SIGN UP LOGIC
     if(!isSignInForm){
      //Sign up logic
      createUserWithEmailAndPassword(auth, email.current.value , password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, 
      photoURL: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
    }).then(() => {
      const {uid , email , displayName , photoURL} = auth.currentUser;
      dispatch(addUser({ uid: uid , 
        email: email , 
        displayName : displayName,
         photoURL: photoURL}));

      
    }).catch((error) => {
      setErrorMessage(error.message)
    });
   
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage);
  });

     }

//   ---------Sign in logic---------------------------
     else {
      //Sign in logic
      signInWithEmailAndPassword(auth, email.current.value , password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
         
      
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+"-"+errorMessage);
      });
    

     }


  };

  const toggleSignIn = () =>{
setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header/>
      <div className="absolute">
      <img src={BG}
      alt="backgorund"/>
      </div>
      <form onSubmit={(e) => e.preventDefault() } className="w-4/12 absolute p-12 bg-black  my-20 mx-auto right-0 left-0 text-white rounded-lg  bg-opacity-80">
       
       
        <h1 className="font-bold text-3xl py-4  ">{ isSignInForm  ? "Sign in" : "Sign up"}</h1>
       
       
        {! isSignInForm &&
         (<input 
         ref={name}
          type="text" placeholder="Full Name"
          className="p-3 my-4 w-full bg-gray-700 rounded-lg "/>
          )}

        <input 
        ref={email}
        type="text" placeholder="Email Address" 
        className="p-3 my-4 w-full bg-gray-700 rounded-lg "/>  

        {! isSignInForm && 
        (<input type="text" placeholder="Phone Number" maxLength={10} 
      className="p-3 my-4 w-full bg-gray-700 rounded-lg "/>)}

        <input 
        ref={password}
        type="password" 
        placeholder="Password" 
        className="p-3 my-4 w-full bg-gray-700 rounded-lg "/>

        <p className="text-red-500 font-bold text-lg py-2 -">{errorMessage}</p>

        <button 
        className="p-3 my-4  bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
          { isSignInForm ? "Sign In" : "Sign up"}
          </button>

        <p className="py-3 cursor-pointer " 
        onClick={toggleSignIn}>
          { isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered ! Sign in now"}
          </p>
             </form>
    </div>
    
  )
}

export default Login ;   