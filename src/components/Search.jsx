import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import Suggestions from "./Sugesstions";

const Search = () => {
    
    return (
        <div>
            <SearchBar />
            <Suggestions />
        </div>
    )
}

export default Search;