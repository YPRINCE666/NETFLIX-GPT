import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constatnts";


const useNowPlayingMovies= () =>{
     
const dispatch=useDispatch(); 


//********* THE BELOW CODE IS FETCHING THE MOVIE DATA AND PUTTING  IN THE MOVIE STORE SLICE */


const getNowPlayingMovies = async () =>{
  const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",
   API_OPTIONS);
   const json = await data.json();
  
   
   dispatch(addNowPlayingMovies(json.results));
}
useEffect(()=>{
  getNowPlayingMovies ();
},[])


/************************************************************************** */
};
export default useNowPlayingMovies;