
import useNowPlayingMovies from './HOOKS/useNowPlayingMovies';
import usePopularMovies from './HOOKS/usePopularMovies';
import useTopRatedMovies from './HOOKS/useTopRatedMovies';
import useTvShows from './HOOKS/useTvShows';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
 useNowPlayingMovies();
 usePopularMovies();
 useTopRatedMovies();
 useTvShows();

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      </div>
  )
}

export default Browse ;