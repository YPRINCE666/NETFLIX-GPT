import { useSelector } from "react-redux"
import VideoTtle from "./VideoTtle"
import VideoBackgroun from "./VideoBackgroun"


const MainContainer = () => {
    const movies= useSelector(store=> store.movies?.nowPlayingMovies);
    if(movies === null) return;

    const mainMovies= movies[4];
    console.log(mainMovies);
    
    const {original_title , overview,id}=mainMovies;
  return (
    <div>

        <VideoTtle title={original_title} overview={overview} />
        <VideoBackgroun movieId={id}/>
        
        
        </div>
  )
}

export default MainContainer