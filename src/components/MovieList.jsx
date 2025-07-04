import MovieCard from "./MovieCard";


const MovieList = (props) => {
    const { title, movies } = props
    return (
        <div className="py-2 md:py-4">
            <h1 className="text-lg md:text-2xl pb-2 md:pb-4 font-semibold text-white">{title}</h1>
            <div className="flex overflow-x-auto">
                <div className="flex gap-1 md:gap-2">
                {movies?.map((movie, index) => movie.poster_path && <MovieCard key={movie + index} posterPath={movie.poster_path}/>)}
                </div>
            </div>
        </div>
    )
}

export default MovieList;