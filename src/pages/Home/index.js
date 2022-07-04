import { Container } from "./style";

function Home(){
    return(
        <Container>
            <h1>Movies</h1>

            <ul>
                <li>
                    <a href="https://www.w3schools.com/js/js_comments.asp"><img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/snh_online_6072x9000_posed_01.jpg" alt="filme" /></a>
                    
                    <span>Spider Man</span>
                </li>
                <li>
                    <a href="https://www.w3schools.com/js/js_comments.asp"><img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/snh_online_6072x9000_posed_01.jpg" alt="filme" /></a>   
                    <span>Spider Man</span>
                </li>
                <li>
                    <a href="https://www.w3schools.com/js/js_comments.asp"><img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/snh_online_6072x9000_posed_01.jpg" alt="filme" /></a>
                    <span>Spider Man</span>
                </li>

            </ul>
        </Container>
    )
}

export default Home;