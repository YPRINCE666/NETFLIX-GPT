import { useSelector } from "react-redux"
import Movielist from "./Movielist"

const SecondaryContainer = () => {
  const movies=useSelector(store => store.movies)
  return (
    movies.nowPlayingMovies &&(
    <div  className="bg-black ">
      <div className="-mt-40  pl-12 relative z-20 ">
      <Movielist title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <Movielist title={"Top Rated"} movies={movies.topRatedMovies}/> 
      <Movielist title={"Popular"} movies={movies.popularMovies}/>
       <Movielist title={"Tv Show's"} movies={movies.tvShows}/>
       </div>
    </div>
  )
  )
}

export default SecondaryContainer