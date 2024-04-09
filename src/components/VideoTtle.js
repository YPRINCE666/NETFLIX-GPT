
const VideoTtle = ({title,overview}) => {
  return (
    <div className=" w-screen aspect-video pt-[18%] px-24 absolute bg-gradient-to-r from-black">
        <h1 className="text-6xl text-white font-bold ">{title}</h1>
        <p className="py-6 text-lg text-white w-1/2">{overview}</p>
        <div className="">
            <button className="bg-white text-black p-4 px-12 text-xl  rounded-lg hover:bg-opacity-70">
            ▶️ Play</button>
            <button className=" mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">More info</button>
        </div>
    </div>
  )
}

export default VideoTtle