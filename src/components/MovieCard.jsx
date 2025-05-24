import { IMAGE_CDN } from "../utils/constants";


const MovieCard = (props) => {
    const {movie} = props;
    return (
        <div className="w-48">
            <img
                className="w-48 rounded-lg"
                alt="movie poster"
                src={IMAGE_CDN + movie.poster_path}
            />
        </div>
    )
}

export default MovieCard;