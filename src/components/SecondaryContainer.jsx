import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {

    const nowPlaying = useSelector(state => state.movies?.nowPlaying);
    const popular = useSelector(state => state.movies?.popular);
    const topRated = useSelector(state => state.movies?.topRated);

    return <div className="bg-black pl-16 py-4">
        <div className="-mt-36 relative z-20">
            <MovieList title={"Now Playing"} movies={nowPlaying} />
            <MovieList title={"Popular"} movies={popular} />
            <MovieList title={"Top Rated"} movies={topRated} />
            <MovieList title={"Rom Com"} movies={nowPlaying} />
        </div>
    </div>
}

export default SecondaryContainer;