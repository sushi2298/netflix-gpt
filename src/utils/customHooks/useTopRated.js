import { useDispatch } from "react-redux";
import { addTopRated } from "../slices/moviesSlice";
import { TOP_RATED_URL, URL_OPTIONS } from "../constants";
import { useEffect } from "react";

const useTopRated = () => {
    const dispatch = useDispatch();
    const getTopRated = async () => {
        const response = await fetch(TOP_RATED_URL, URL_OPTIONS);
        const result = await response.json();
        dispatch(addTopRated(result.results));
    }

    useEffect(() => {
        getTopRated();
    }, []);

}

export default useTopRated;