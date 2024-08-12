import React, { useState } from 'react';

const MoviesList = () => {
    const [movies, setMovies] = useState([
        { title: 'Inception', description: 'A mind-bending thriller', genre: 'Action', showDetails: false },
        { title: 'The Matrix', description: 'A hacker discovers the true nature of reality', genre: 'Action', showDetails: false },
        { title: 'Interstellar', description: 'A space epic about love and time', genre: 'Sci-Fi', showDetails: false }
    ]);
    const [viewAll, setViewAll] = useState(true);

    const toggleDetails = (index) => {
        const updatedMovies = [...movies];
        updatedMovies[index].showDetails = !updatedMovies[index].showDetails;
        setMovies(updatedMovies);
    };

    const removeMovie = (index) => {
        const updatedMovies = movies.filter((_, i) => i !== index);
        setMovies(updatedMovies);
    };

    const toggleView = () => {
        setViewAll(!viewAll);
    };

    const filteredMovies = viewAll ? movies : movies.filter(movie => movie.genre === 'Action');

    return (
        <div>
            <button onClick={toggleView}>{viewAll ? 'Show Action Movies Only' : 'Show All Movies'}</button>
            <ul>
                {filteredMovies.map((movie, index) => (
                    <li key={index}>
                        <div onClick={() => toggleDetails(index)}>{movie.title}</div>
                        {movie.showDetails && <p>{movie.description}</p>}
                        <button onClick={() => removeMovie(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;
