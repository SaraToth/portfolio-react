import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

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