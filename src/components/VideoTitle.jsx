
const VideoTitle = (props) => {
    const { title, overview } = props;

    return <div className="pt-[18%] px-4 md:px-16 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
        <h1 className="font-bold text-lg md:text-4xl pb-2 md:pb-4">{title}</h1>
        <p className="w-1/2 h-[30%] overflow-hidden overflow-ellipsis text-xs md:text-2xl">{overview}</p>
        <div className="flex gap-4 pt-6 text-sm md:text-2xl">
            <button className="py-1 px-4 md:py-2 md:px-8 bg-white text-black font-bold rounded-md hover:bg-opacity-75">Play</button>
            <button className="py-1 px-4 md:py-2 md:px-8 bg-slate-300 bg-opacity-50 font-bold rounded-md hover:bg-opacity-20 ">More Info</button>
        </div>
    </div>
}

export default VideoTitle;