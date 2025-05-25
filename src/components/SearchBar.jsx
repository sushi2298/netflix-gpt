import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BCK_IMG, POSTER_PATH, SEARCH_URL_KEY_WORD, SEARCH_URL_MOVIE, URL_OPTIONS } from "../utils/constants";
import language from "../utils/language";
import { updateResults } from "../utils/slices/searchSlice";

const SearchBar = () => {
    const currentLang = useSelector(state => state.config?.language);

    const searchText = useRef(null);
    const dispatch = useDispatch();

    const getPosters = async({id}) => {
        const detail = await fetch(POSTER_PATH(id), URL_OPTIONS);
        const result = await detail.json();
        return result;
    }

    const handleSearch = async () => {
        const currentText = searchText.current.value;

        const keyResponse = await fetch(SEARCH_URL_KEY_WORD(currentText), URL_OPTIONS);
        const keyResult = await keyResponse.json();
        const keyMoviesRes = keyResult.results.map((movie) => getPosters(movie));
        const keyMovies = await Promise.all(keyMoviesRes);

        const movResponse = await fetch(SEARCH_URL_MOVIE(currentText), URL_OPTIONS);
        const movieResult = await movResponse.json();

        dispatch(updateResults({ keywordResults: keyMovies, movieResults: movieResult.results}));
    }

    return <div className="flex  justify-center">
        <div className="absolute -z-10">
            <img
                src={BCK_IMG}
                alt="bg"
            />
        </div>
        <form className="mt-[8%] bg-black w-1/2 grid grid-cols-12 rounded-lg" onSubmit={(e) => {e.preventDefault()}}>
            <input 
                placeholder={language[currentLang].searchText}
                type="text"
                className="p-4 m-2 col-span-10 rounded-md"
                ref={searchText}
            />
            <button
                className="bg-slate-300 bg-opacity-25 p-2 m-2 rounded-md col-span-2 text-white hover:bg-opacity-20 font-semibold"
                onClick={handleSearch}
            >
                Search
            </button>

        </form>
    </div>
};


export default SearchBar;