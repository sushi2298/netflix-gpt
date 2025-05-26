import { useDispatch, useSelector } from "react-redux";
import { addPopular } from "../slices/moviesSlice";
import { POPULAR_URL, URL_OPTIONS } from "../constants";
import { useEffect } from "react";

const usePopular = () => {
    const dispatch = useDispatch();
    const popular = useSelector(state => state.movies?.popular)
    const getPopular = async () => {
        const response = await fetch(POPULAR_URL, URL_OPTIONS);
        const result = await response.json();
        dispatch(addPopular(result.results));
    }

    useEffect(() => {
        if(!popular) getPopular();
    }, []);

}

export default usePopular;