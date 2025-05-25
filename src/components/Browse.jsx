
import Header from "./Header";
import useNowPlaying from "../utils/customHooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopular from "../utils/customHooks/usePopular";
import useTopRated from "../utils/customHooks/useTopRated";
import Search from "./Search";
import { useSelector } from "react-redux";

const Browse = () => {
    const isOpen = useSelector(state => state.search?.isOpen);

    useNowPlaying();
    usePopular();
    useTopRated();

    return (
        <div>
            <Header isLoggedIn />
            {isOpen ? <Search /> : <>
                <MainContainer />
                <SecondaryContainer />
            </>}
        </div>
    )
}

export default Browse;