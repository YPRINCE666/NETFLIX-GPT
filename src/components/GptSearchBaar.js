import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";

const GptSearchBaar = () => {
    const langKey= useSelector(store => store.config.lang)
  return (
    <div className="pt-[12%] flex justify-center">
        <form className=" w-1/2 bg-black grid grid-cols-12">
    <input type='text' className='  col-span-9 p-4 m-4 '
     placeholder={lang[langKey].gptSearchPlaceholder}/>
    <button className=' col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'
    >{lang[langKey].search}</button>
    </form>
    </div>
  )
}

export default GptSearchBaar;