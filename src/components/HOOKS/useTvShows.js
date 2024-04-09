import { useDispatch } from "react-redux";
import {  addtvShows } from "../../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constatnts";


const useTvShows= () =>{
     
const dispatch=useDispatch(); 


//********* THE BELOW CODE IS FETCHING THE MOVIE DATA AND PUTTING  IN THE MOVIE STORE SLICE */


const getTvShows = async () =>{
  const data = await fetch("https://api.themoviedb.org/3/tv/popular?page=1",
   API_OPTIONS);
   const json = await data.json();
  
   
   dispatch(addtvShows(json.results));
}
useEffect(()=>{
  getTvShows();
},[])


/************************************************************************** */
};
export default useTvShows;