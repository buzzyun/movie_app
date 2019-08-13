import React from "react";
import PropTyes from "prop-types";
import "./Movie.css";

function Movie({ year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie_data">
        <h3 className="movie_title">{title}</h3>
        <h5 className="movie_year">{year}</h5>
        <ul className="movie_genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres_genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie_summary">{summary.slice(0, 140)}...</p>
      </div>
    </div>
  );
}

Movie.PropTyes = {
  id: PropTyes.number.isRequired,
  year: PropTyes.number.isRequired,
  title: PropTyes.string.isRequired,
  summary: PropTyes.string.isRequired,
  poster: PropTyes.string.isRequired,
  genres: PropTyes.arrayOf(PropTyes.string).isRequired
};

export default Movie;
