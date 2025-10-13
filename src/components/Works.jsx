const Works = () => {
        return (
            <section id="works" className="home-works">
                <div className="container">
                    <h2>Works</h2>
                    <div className="works__container">

                    {/* Individual projects create dynamiclly through iteration */}
                            <div className="works__work">
                                <img 
                                    src=""
                                    alt="Project Image"
                                    width="300"
                                    height="300"
                                    loading="lazy"
                                    class="home-projects__img"
                                />
                                <div class="home-projects__content-container">
                                    <h3 class="home-projects__h3">Project Name</h3>
                                    <div class="home-projects__content">Project Description</div>
                                    <a href="./project-${projectNumber}" class="btn-link" alt="">View Project Name</a>
                                </div>
                            </div>

                    </div>
                </div>
            </section>
    )
};


export default Works;
