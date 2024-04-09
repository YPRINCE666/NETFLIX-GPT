import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constatnts";


const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user= useSelector((store) => store.user)
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

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between ">
      <img 
      className="w-44 "
      src={LOGO}
      alt="logo"/> 
      {user &&(
      <div className="flex p-2 ">
        <img className="w-12 h-12 "
        alt="usericon"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        
        />
        <button onClick={handleSignOut} className="font-bold text-emerald-50 m-3  border-2 border-neutral-300 rounded-m bg-slate-800 "> Sign Out </button>
      </div>
)}
    </div>
  )
}

export default Header