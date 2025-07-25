import { useSelector } from "react-redux";
import useTrailerVideo from "../utils/customHooks/useTrailerVideo";

const VideoBackground = (props) => {
    const { movieId } = props;
    const trailer = useSelector(store => store.movies?.trailer);

    useTrailerVideo(movieId);

    return <div className="w-screen ">
        <iframe
            className="w-screen aspect-video"
            src={`https://www.youtube.com/embed/${trailer?.key}?&autoplay=1&mute=1&loop=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
    </div>
}

export default VideoBackground;