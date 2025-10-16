import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";

const About = ({page}) => {

    const { projectId } = useParams();
    const { t } = useTranslation();

    if (page === "home") {
        const toolsArray = t("home.about.tools", { returnObjects: true });

        return(
            <section id="about" className="home-about">
                <div className="container">
                    <h2>About Me</h2>
                    <div>
                        <div>
                            <h3>{t("home.about.h3")}</h3>
                            <p>{t("home.about.content")}</p>
                        </div>
                        <div>
                            <h3>My Skills,</h3>
                            <div>
                            {toolsArray.map((tool) => (
                                <div key={tool}>{tool}</div>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    } else if (page === "project") {
        const project = t(`projects.${projectId}`, { returnObjects: true });

        return(
            <section id="about" className="project-about">
                <div className="container">
                    <img 
                        src={project.imgSrc || "null"}
                        alt="Project Image"
                        width="300"
                        height="300"
                        loading="lazy"
                    />
                    <h2>Project Overview</h2>
                    <div>
                        <p>{project.overview}</p></div>
                    <h3>Tools Used</h3>
                    <div>
                        {project.tools.map((tool) => (
                            <div key={tool}>{tool}</div>
                        ))}
                    </div>
                    <h3>See Live</h3>
                    <div>
                        <Link 
                            to={project.liveLink}
                            target="_blank" 
                            rel="noopener noreferrer"
                        >Live Link</Link>
                        <Link
                            to={project.codeLink}
                            target="_blank" 
                            rel="noopener noreferrer"
                        >Code Link</Link>
                    </div>
                </div>
            </section>
        )
    }

};

export default About;