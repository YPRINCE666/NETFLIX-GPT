
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';
import useNowPlayingMovies from './HOOKS/useNowPlayingMovies';
import usePopularMovies from './HOOKS/usePopularMovies';
import useTopRatedMovies from './HOOKS/useTopRatedMovies';
import useTvShows from './HOOKS/useTvShows';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
const showGptSearch= useSelector(store => store.gpt.showGptSearch);
 useNowPlayingMovies();
 usePopularMovies();
 useTopRatedMovies();
 useTvShows();

  return (
    <div>
      <Header/>
      {showGptSearch ? (<GptSearch/>):

      (
      <><MainContainer/>
      <SecondaryContainer/>
      </>)
    
    }
      
      
      </div>
  )
}

export default Browse ;