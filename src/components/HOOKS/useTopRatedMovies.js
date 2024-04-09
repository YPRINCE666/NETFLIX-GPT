import { useDispatch } from "react-redux";
import {  addtopRatedMovies } from "../../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constatnts";


const useTopRatedMovies= () =>{
     
const dispatch=useDispatch(); 


//********* THE BELOW CODE IS FETCHING THE MOVIE DATA AND PUTTING  IN THE MOVIE STORE SLICE */


const getTopRatedMovies = async () =>{
  const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1",
   API_OPTIONS);
   const json = await data.json();
  
   
   dispatch(addtopRatedMovies(json.results));
}
useEffect(()=>{
  getTopRatedMovies();
},[])


/************************************************************************** */
};
export default useTopRatedMovies;