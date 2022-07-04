import { Container,  MovieList, Movie} from "./style";

function Home(){

    const movies = [
        {
            id: 1,
            title: 'Batman',
            image_url: 'https://img.elo7.com.br/product/original/3FBA809/big-poster-filme-batman-2022-90x60-cm-lo002-poster-batman.jpg'
        },
        {
            id: 2,
            title: 'Spider Man',
            image_url: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/snh_online_6072x9000_posed_01.jpg'
        },
        {
            id: 3,
            title: 'Avengers',
            image_url: 'https://i.pinimg.com/736x/72/fc/a7/72fca72b95cef647b2dde1bd67a79049.jpg'
        }
    ]

    return(
        <Container>
            <h1>Movies</h1>

            <MovieList>

                {movies.map(movie => {
                    return(
                        <Movie key={movie.id}>
                            <a href="https://www.w3schools.com/js/js_comments.asp"><img src={movie.image_url} alt={movie.title} /></a>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}
            </MovieList>
        </Container>
    )
}

export default Home;