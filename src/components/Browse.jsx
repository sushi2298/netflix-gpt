
import Header from "./Header";
import useNowPlaying from "../utils/customHooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
    useNowPlaying();

    return (
        <div>
            <Header isLoggedIn />
            <MainContainer />
            <SecondaryContainer />
        </div>
    )
}

export default Browse;