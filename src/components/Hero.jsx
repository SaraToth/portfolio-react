import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Hero = ({page}) => {

    const { projectId } = useParams();
    const { t } = useTranslation();

    if (page === "home") {
        return (
            <section id="hero" className="home-hero">
                <div className="container">
                    <h1>{t("home.hero.h1")}</h1>
                    <h2>{t("home.hero.h2")}</h2>
                    <div className="content">
                        <p>{t("home.hero.content")}</p>
                    </div>
                    <Link to="/#works" >Work</Link>
                </div>
            </section>
        )
    } else if (page === "project") {
        const project = t(`projects.${projectId}`, { returnObjects: true });

        return(
            <section id="hero" className="project-hero">
                <div className="container">
                    <h1>{project.name}</h1>
                    <div className="content">
                        <p>{project.brief}</p>
                        <Link 
                            to={project.liveLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >Live</Link>
                    </div>
                </div>
            </section>
        )
    }
};

export default Hero;
