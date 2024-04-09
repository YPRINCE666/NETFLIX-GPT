import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/constatnts";
import { useEffect } from "react";
import { addTrailerVideo } from "../../utils/moviesSlice";

const useMovieTrailer = (movieId) =>{
    const dispatch=useDispatch();

    const getMovieVideo= async () =>{
        const data = await 
        fetch("https://api.themoviedb.org/3/movie/" 
        +movieId+ "/videos?language=en-US", 
        API_OPTIONS);
        
        const  json= await data.json();
        
    
        const filterData=json.results.filter((video) => video.type ==="Trailer");
        const trailer= filterData.lenght ? filterData[1] :json.results[22];
        console.log(json)
        
        dispatch(addTrailerVideo(trailer));
    
    };
    useEffect(()=>{
    getMovieVideo();
    },[]) 
};

export default useMovieTrailer;