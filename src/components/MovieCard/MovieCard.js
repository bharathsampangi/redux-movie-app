import React from "react"
import { imageUrl } from "../../common/apis/movieKey"
import "./MovieCard.scss"

const MovieCard = ({ data }) => {
    return (
        <div className="card-item">
            <div className="card-inner">
                <div className="card-top">
                    <img src={`${imageUrl}/${data.poster_path}`} alt={data.title} />
                </div>
                <div className="card-bottom">
                    <div className="card-info">
                        <h4>{data.title}</h4>
                        <p>{data.release_date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard