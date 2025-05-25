import { useSelector } from "react-redux";
import { BCK_IMG } from "../utils/constants";
import language from "../utils/language";

const SearchBar = () => {
    const currentLang = useSelector(state => state.config?.language)

    return <div className="flex  justify-center">
        <div className="absolute -z-10">
            <img
                src={BCK_IMG}
                alt="bg"
            />
        </div>
        <form className="mt-[8%] bg-black w-1/2 grid grid-cols-12 rounded-lg">
            <input 
                placeholder={language[currentLang].searchText}
                type="text"
                className="p-4 m-2 col-span-10 rounded-md"
            />
            <button className="bg-slate-300 bg-opacity-25 p-2 m-2 rounded-md col-span-2 text-white hover:bg-opacity-20 font-semibold">Search</button>

        </form>
    </div>
};


export default SearchBar;