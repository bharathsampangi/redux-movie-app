import React from "react"
import { useSelector } from "react-redux"
import { getAllMovies } from "../../features/movies/movieSlice"
import MovieCard from "../MovieCard/MovieCard"
import "./MovieListing.scss"

const MovieListing = () => {
    const movies = useSelector(getAllMovies)
    let renderMovies = ""
    renderMovies = movies && movies.results && movies.results.length > 0 ? 
    (
        movies.results.map((movie, index) => (
            <MovieCard key={index} data={movie} />
        ))
    ) : 
    (
        <div className="movies-error">
            <h3>{movies.error}</h3>
        </div>
    )
    return (
        <div className="movie-wrapper">
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">
                    {renderMovies}
                </div>
            </div>
        </div>
    )
}

export default MovieListing