import { IMAGE_CDN } from "../utils/constants";


const MovieCard = (props) => {
    const { posterPath} = props;
    return (
        <div className="w-28 md:w-48">
            <img
                className="w-28 md:w-48 rounded-lg"
                alt="movie poster"
                src={IMAGE_CDN + posterPath}
            />
        </div>
    )
}

export default MovieCard;