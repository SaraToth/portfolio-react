import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Projects = () => {

    // Access projects data from localization files
    const { t } = useTranslation();
    const projects = t("projects", { returnObjects: true });
    const projectsArray = Object.values(projects);

    return(
        <section id="projects" className="home-projects">
            <div className="container">
                <h2>Works</h2>
                <div className="home-projects__container">

                {projectsArray.map((project) => (
                    <div key={project.id} className="home-projects__project">
                        <img 
                            src={project.imgSrc || "null"}
                            alt="Project Image"
                            width="300"
                            height="300"
                            loading="lazy"
                        />
                        <div>
                            <h3>{project.name}</h3>
                            <div>
                                <p>{project.brief}</p>
                            </div>
                            <Link to={`/projects/${project.id}`} className="btn-default">View {project.name}</Link>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;