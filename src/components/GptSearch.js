

import { BG } from '../utils/constatnts'
import GptMovieSuggestion from './GptMovieSuggestion'
import GptSearchBaar from './GptSearchBaar'

const GptSearch = () => {
  return (
    <div>
        <div className='absolute -z-10 opacity-93'>
            <img
            src={BG}
            alt='bg'
            />
        </div>
<GptSearchBaar/>
<GptMovieSuggestion/>


    </div>
  )
}

export default GptSearch