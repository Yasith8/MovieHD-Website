
import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./movieCard";


//7320f91d

const API_URL = 'http://www.omdbapi.com?apikey=7320f91d';

//const movie1 = {
    //"Title": "Marvel One-Shot: Agent Carter",
   // "Year": "2013",
   // "imdbID": "tt3067038",
   // "Type": "movie",
   // "Poster": "https://m.media-amazon.com/images/M/MV5BZDIwZTM4M2QtMWFhYy00N2VmLWFlMjItMzI3NjBjYTc0OTMxXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"
//};

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');


    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    };

    useEffect(() => {
        searchMovies("marvel");
    },[])

    return (
        <div class='app'>
            <h1>MovieHD</h1>

            <div className="search">
                <input
                    placeholder="Search for Movies"
                    value={searchTerm}
                    onChange={(e)=>setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={()=>{searchMovies(searchTerm)}}
                />
            </div>
            {
                movies?.length > 0 ?
                    (  <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                    ))}
                    </div>) :
                    (
                        <div className="empty">
                            <h2>No Movies Found</h2>
                        </div>
                    )
            }
          

        </div>
    );
}

export default App;