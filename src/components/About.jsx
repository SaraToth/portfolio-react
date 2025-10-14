const About = ({page}) => {

    if (page === "home") {
        return(
            <section id="about" className="home-about">
                <div className="container">
                    <h2>About Me</h2>
                    <div>
                        <div>
                            <h3>Hello,</h3>
                            <p>I'm a passionate Full Stack Developer building and managing the Front-end and Back-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>
                        </div>
                        <div>
                            <h3>My Skills,</h3>
                            <div>
                                <div>HTML</div>
                                <div>CSS</div>
                                <div>Javascript</div>
                                <div>React</div>
                                <div>Git</div>
                                <div>Github</div>
                                <div>Node.js</div>
                                <div>Express.js</div>
                                <div>Typescript</div>
                                <div>SQL</div>
                                <div>PostgreSQL</div>
                                <div>Prisma</div>
                                <div>Webpack</div>
                                <div>Jest</div>
                                <div>Responsive Design</div>
                                <div>Accesibility (a11y)</div>
                                <div>REST API</div>
                                <div>Deployment</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    } else if (page === "project") {
        return(
            <section id="about" className="project-about">
                <div className="container">
                    <img 
                        src="null"
                        alt="Project Image"
                        width="300"
                        height="300"
                        loading="lazy"
                        className="project-about__img"
                    />
                    <h2>Project Overview</h2>
                    <div>
                        <p>Project Overview</p></div>
                    <h3>Tools Used</h3>
                    <div>
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>Javascript</div>
                    </div>
                    <h3>See Live</h3>
                    <div>
                        <a href="targetLink" target="_blank" rel="noopener noreferrer">Live Link</a>
                        <a href="codeLink" target="_blank" rel="noopener noreferrer">Code Link</a>
                    </div>
                </div>
            </section>
        )
    }

};

export default About;