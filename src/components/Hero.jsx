import { Link } from "react-router-dom"

const Hero = () => {
    return(
        <section>
            <div className="container">
                <h1>Sara Toth</h1>
                <h2>Fullstack Developer</h2>
                <div className="content">
                    <p>A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product</p>
                </div>
                <Link to="/#works" >Works</Link>
            </div>
        </section>
    )
};

export default Hero;
