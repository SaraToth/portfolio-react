import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";

const Home = () => {

    return(
        <>
        <Hero page="home"/>
        <About page="home" />
        <Projects/>
        <Contact/>
        </>
    )
};

export default Home;