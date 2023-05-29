import React from "react";
import "./MovieCard.css";

function MovieCard({ movie }) {
  return (
    <div className="card">
      <img src={movie.posterUrl} alt={movie.title} className="card-img"/>
    </div>
  );
}

export default MovieCard;

