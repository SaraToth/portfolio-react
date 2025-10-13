import { Link } from "react-router-dom"

const Contact = () => {
    return (
        <section id="contact" className="home-contact">
            <div className="container">
                <h2>Let's Work Together</h2>
                <div className="content">
                    <p>I'm currently open to new opportunities and interesting projects. Whether you want to discuss a potential collaboration or just say hello, I'd love to hear from you.</p>
                </div>
                
                {/* Toast Container */}
                <div id="toast" className="toast">Copied email to clipboard!</div>

                {/* Contact Button - Toast activator */}
                <button>Contact</button>

                <div>
                    <ul>
                        <li><Link 
                            to="https://www.linkedin.com/in/saraatoth/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <img 
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                                width="30"
                                height="30"
                                loading="lazy"
                                alt="Linked In"
                            />
                        </Link></li>
                        <li><Link
                            to="https://github.com/saratoth/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img 
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                                width="30"
                                height="30"
                                loading="lazy"
                                alt="Github"
                            />
                        </Link></li>
                    </ul>
                </div>
            </div>
        </section>
    )
};

export default Contact;