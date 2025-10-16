import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Contact = () => {

    const { t } = useTranslation();
    
    return (
        <section id="contact" className="home-contact">
            <div className="container">
                <h2>Let's Work Together</h2>
                <div className="content">
                    <p>{t("home.contact.content")}</p>
                </div>
                
                {/* Toast Container */}
                <div id="toast" className="toast">Copied email to clipboard!</div>

                {/* Contact Button - Toast activator */}
                <button>Contact</button>

                <div>
                    <ul>
                        <li><Link 
                            to={t("linkedIn")}
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
                            to={t("github")}
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