import { Link } from "react-router-dom"

const Hero = ({page}) => {

    if (page === "home") {
        return (
            <section id="hero" className="home-hero">
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
    } else if (page === "project") {
        return(
            <section id="hero" className="project-hero">
                <div className="container">
                    <h1>Project Name</h1>
                    <div className="content">
                        <p>Project Description</p>
                        <Link to="Live Link" target="_blank" rel="noopener noreferrer">Live Link</Link>
                    </div>
                </div>
            </section>
        )
    }
};

export default Hero;
