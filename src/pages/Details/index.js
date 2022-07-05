import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container } from "./style";


const API_KEY = process.env.REACT_APP_API_KEY

function Details(){
    
    const image_path = 'https://image.tmdb.org/t/p/w500'
    const { id } = useParams();

    const [movie, setMovie] = useState({});

    useEffect(() => {
        //consumir a api

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
            .then(res => res.json())
            .then(data => {

                const{title, poster_path, overview, release_date} = data;

                const movie = {
                    id,
                    title: title,
                    sinopse: overview,
                    // imagem: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
                    image:`${image_path}${poster_path}`,
                    releaseDate: release_date
                }
                // console.log(movie);
                setMovie(movie);
            })        

    }, [id])

    return (
        <Container>
            <div className="movie">
                <img src={movie.image} alt={movie.title}/>
                <div className="details">
                    <h1>{movie.title}</h1>
                    <span>Sinopse: {movie.sinopse}</span>
                    <span className="release-date">Release Date: {movie.releaseDate}</span>

                    <Link to="/"><button>Go back</button></Link>
                </div>
            </div>
        </Container>
    );
}

export default Details;