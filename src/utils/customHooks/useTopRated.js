import { useDispatch, useSelector } from "react-redux";
import { addTopRated } from "../slices/moviesSlice";
import { TOP_RATED_URL, URL_OPTIONS } from "../constants";
import { useEffect } from "react";

const useTopRated = () => {
    const dispatch = useDispatch();
    const topRated = useSelector(state => state.movies?.topRated)
    const getTopRated = async () => {
        const response = await fetch(TOP_RATED_URL, URL_OPTIONS);
        const result = await response.json();
        dispatch(addTopRated(result.results));
    }

    useEffect(() => {
        if(!topRated) getTopRated();
    }, []);

}

export default useTopRated;