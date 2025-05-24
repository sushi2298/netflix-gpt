import { useDispatch } from "react-redux";
import { addPopular } from "../slices/moviesSlice";
import { POPULAR_URL, URL_OPTIONS } from "../constants";
import { useEffect } from "react";

const usePopular = () => {
    const dispatch = useDispatch();
    const getPopular = async () => {
        const response = await fetch(POPULAR_URL, URL_OPTIONS);
        const result = await response.json();
        dispatch(addPopular(result.results));
    }

    useEffect(() => {
        getPopular();
    }, []);

}

export default usePopular;