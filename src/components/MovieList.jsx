import MovieCard from "./MovieCard";


const MovieList = (props) => {
    const { title, movies } = props
    return (
        <div className="py-4">
            <h1 className="text-2xl pb-4 font-semibold text-white">{title}</h1>
            <div className="flex overflow-x-scroll">
                <div className="flex gap-2">
                {movies?.map((movie) => <MovieCard movie={movie}/>)}
                </div>
            </div>
        </div>
    )
}

export default MovieList;