import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const Suggestions = () => {
    const results = useSelector(state => state.search)

    return <div className="pl-2 md:pl-4">
        {
            results.movieResults?.length > 0  && <MovieList title="Movies"  movies={results.movieResults}/>
        }
        {
            results.keywordResults?.length > 0 && <MovieList title="Keyword"  movies={results.keywordResults}/>
        }
    </div>
};

export default Suggestions;