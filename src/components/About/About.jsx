import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
import styles from "./About.module.css";

const About = ({page}) => {

    const { projectId } = useParams();
    const { t } = useTranslation();

    const scrollToSection = (id, offset=100) => {
        const element = document.getElementById(id);
        if (!element) return;

        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });
    };

    if (page === "home") {
        const toolsArray = t("home.about.tools", { returnObjects: true });

        return(
            <section id="about" className={styles.homeSection}>
                <div className={styles.homeContainer}>
                    <h2>About Me</h2>
                    <div className={styles.homeContent}>
                        <div className={styles.aboutContent}>
                            <h3 className={styles.greeting}>{t("home.about.h3")}</h3>
                            <p>{t("home.about.content")}</p>
                            <Link to="#contact" onClick={() => scrollToSection("contact")} className="btn-default">Contact</Link>
                        </div>
                        <div>
                            <h3 className={styles.skillsH3}>My Skills</h3>
                            <div className={styles.skillsContainer}>
                            {toolsArray.map((tool) => (
                                <div key={tool} className={styles.tool}>{tool}</div>
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
            <section id="about" className={styles.projectSection}>
                <div className={styles.container}>
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
                            <div key={tool} className="tool">{tool}</div>
                        ))}
                    </div>
                    <h3>See Live</h3>
                    <div>
                        <Link 
                            to={project.liveLink}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn-default"
                        >Live Link</Link>
                        <Link
                            to={project.codeLink}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn-default"
                        >Code Link</Link>
                    </div>
                </div>
            </section>
        )
    }

};

export default About;