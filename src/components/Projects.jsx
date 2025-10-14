const Projects = () => {
    return(
        <section id="projects" className="home-projects">
            <div className="container">
                <h2>Works</h2>
                <div className="projects__container">

                {/* Individual projects create dynamiclly through iteration */}
                        <div className="projects__project">
                            <img 
                                src="null"
                                alt="Project Image"
                                width="300"
                                height="300"
                                loading="lazy"
                                className="home-projects__img"
                            />
                            <div className="home-projects__content-container">
                                <h3 className="home-projects__h3">Project Name</h3>
                                <div className="home-projects__content">Project Description</div>
                                <a href="./project-${projectNumber}" className="btn-link" alt="">View Project Name</a>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;