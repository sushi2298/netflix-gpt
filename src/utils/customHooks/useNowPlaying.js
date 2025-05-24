import { useDispatch } from "react-redux";
import { addNowMovies } from "../slices/moviesSlice";
import { NOW_PLAYING_URL, URL_OPTIONS } from "../constants";
import { useEffect } from "react";

const useNowPlaying = () => {
    const dispatch = useDispatch();
    const getNowPlaying = async () => {
        const response = await fetch(NOW_PLAYING_URL, URL_OPTIONS);
        const result = await response.json();
        dispatch(addNowMovies(result.results));
    }

    useEffect(() => {
        getNowPlaying();
    }, []);

}

export default useNowPlaying;