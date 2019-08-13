import React from "react";
import PropTyes from "prop-types";
import "./Movie.css";

function Movie({ year, title, summary, poster }) {
  return (
    <div closs="movie">
      <img src={poster} alt={title} title={title} />
      <div class="movie_data">
        <h3 class="movie_title">{title}</h3>
        <h5 class="movie_year">{year}</h5>
        <p class="movie_summary">{summary}</p>
      </div>
    </div>
  );
}

Movie.PropTyes = {
  id: PropTyes.number.isRequired,
  year: PropTyes.number.isRequired,
  title: PropTyes.string.isRequired,
  summary: PropTyes.string.isRequired,
  poster: PropTyes.string.isRequired
};

export default Movie;
