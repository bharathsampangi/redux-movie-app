import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi"
import { apiKey } from "../../common/apis/movieKey"

const fetchAsyncMovies = createAsyncThunk('/movies/fetchAsyncMovies', async () => {
    const query = 'Harry'
    const response = await movieApi
        .get(`search/movie?api_key=${apiKey}&query=${query}`)
    return response.data
})

const initialState = {
    movies: { error: "" }
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload
        }
    }
})

export const { addMovies } = movieSlice.actions
export const getAllMovies = (state) => state.movies.movies
export default movieSlice.reducer