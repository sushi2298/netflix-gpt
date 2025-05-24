
import Header from "./Header";
import useNowPlaying from "../utils/customHooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopular from "../utils/customHooks/usePopular";
import useTopRated from "../utils/customHooks/useTopRated";

const Browse = () => {
    useNowPlaying();
    usePopular();
    useTopRated();

    return (
        <div>
            <Header isLoggedIn />
            <MainContainer />
            <SecondaryContainer />
        </div>
    )
}

export default Browse;