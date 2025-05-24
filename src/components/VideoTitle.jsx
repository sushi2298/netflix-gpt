
const VideoTitle = (props) => {
    const { title, overview } = props;

    return <div className="py-[18%] px-16 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
        <h1 className="font-bold text-4xl pb-4">{title}</h1>
        <p className="w-1/2 text-2xl">{overview}</p>
        <div className="flex gap-4 pt-6 text-2xl">
            <button className="py-2 px-8 bg-white text-black font-bold rounded-md hover:bg-opacity-75">Play</button>
            <button className="py-2 px-8 bg-slate-300 bg-opacity-50 font-bold rounded-md hover:bg-opacity-20 ">More Info</button>
        </div>
    </div>
}

export default VideoTitle;