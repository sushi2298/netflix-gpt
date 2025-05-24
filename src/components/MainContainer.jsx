import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
    const nowMovies = useSelector(store => store.movies?.nowPlaying);
    if(!nowMovies) return;

    const { id, original_title, overview } = nowMovies[0];

    return <div >
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id}/>
    </div>
}

export default MainContainer;