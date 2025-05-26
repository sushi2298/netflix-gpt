import { useEffect } from "react";
import { URL_OPTIONS, VIDEOS_URL } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../slices/moviesSlice";

const useTrailerVideo = (movieId) => {
    const dispatch = useDispatch();
    const trailer = useSelector(state => state.movies?.trailer)
    const getVideo = async() => {
        const response = await fetch(VIDEOS_URL(movieId), URL_OPTIONS);
        const result = await response.json();
        let trailer = result.results.find((item) => item.type === "Trailer");
        if(!trailer) {
            trailer = result.results[0];
        }
        dispatch(addTrailer(trailer))
    }

    useEffect(() => {
        if(!trailer) getVideo();
    }, []);
}

export default useTrailerVideo;