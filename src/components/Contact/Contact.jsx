import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {

    const { t } = useTranslation();
    const [isToast, setToast] = useState(false);
    const email = t("email", { returnObjects: true });

    const handleToast = () => {
        navigator.clipboard.writeText(email);
        setToast(true);
        setTimeout(() => {
            setToast(false)
        }, 2000)
    }
    
    return (
        <section id="contact" className={styles.contactSection}>
            <div className={styles.container}>
                <h2>Let's Work Together</h2>
                <div className={styles.content}>
                    <p>{t("home.contact.content")}</p>
                </div>
                
                {/* Toast Container */}
                {isToast && (
                    <div id="toast" className={styles.toast}>Copied email to clipboard!</div>
                )}

                {/* Contact Button - Toast activator */}
                <button className="btn-default" onClick={handleToast}>Contact</button>

                <div className={styles.socials}>
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