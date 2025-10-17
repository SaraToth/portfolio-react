import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./Projects.module.css"

const Projects = () => {

    // Access projects data from localization files
    const { t } = useTranslation();
    const projects = t("projects", { returnObjects: true });
    const projectsArray = Object.values(projects);

    return(
        <section id="projects" className={styles.projectsSection}>
            <div className={styles.container}>
                <h2>Works</h2>
                <div className={styles.projectContainer}>

                {projectsArray.map((project) => (
                    <div key={project.id} className={styles.project}>
                        <img 
                            src={project.imgSrc || "null"}
                            alt="Project Image"
                            width="600"
                            height="400"
                            loading="lazy"
                            className={styles.img}
                        />
                        <div className={styles.content}>
                            <div>
                                <h3>{project.name}</h3>
                            <div><p>{project.brief}</p>
                            </div>
                            <Link to={`/projects/${project.id}`} className="btn-default">View {project.name}</Link>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;