import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constatnts";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";


const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user= useSelector((store) => store.user);
  const showGptSearch= useSelector((store) => store.gpt.showGptSearch) 
  const handleSignOut = () =>{
    signOut(auth).then(() => {
    }).catch((error) => {
      // An error happened.
    });
  };

  useEffect(() =>{
     const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
       
        const {uid , email , displayName , photoURL} = user;
        dispatch(addUser({ uid: uid , 
          email: email , 
          displayName : displayName, 
          photoURL: photoURL}
          ));
        navigate("/browse");
      }

       else {
       dispatch(removeUser()); 
       navigate("/")
      }
    });
    return () => unsubscribe();
  },[]);

  const handleGptSearchClick = () =>{
    // gpt search toggle
    dispatch(toggleGptSearchView());
  }
  const handleLanguageChange=(e) =>{
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between ">
      <img 
      className="w-44 "
      src={LOGO}
      alt="logo"/> 
      {user &&(
      <div className="flex p-2 ">
        {showGptSearch &&
        (<select className="p-2 m-2 bg-gray-900 text-white "
         onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="hindi">Hindi</option>
          <option value="french">French</option> 
        </select>)}
        <button 
        className="py-2 px-2 mx-4 my-2 bg-purple-800 text-white rounded-lg" 
        onClick={handleGptSearchClick}>
          {showGptSearch? "HomePage":"GPT Search"}</button>
        <img className="w-12 h-12 "
        alt="usericon"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        
        />
        
        <button onClick={handleSignOut} 
        className=" py-2 px-2 mx-2 my-2 bg-teal-800 text-white rounded-lg ">
           Sign Out </button>
           
      </div>
)}
    </div>
  )
}

export default Header