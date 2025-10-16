import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Header.module.css";

const Header = ({isProjectPage}) => {

    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const {i18n} = useTranslation();

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleChange = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    // Default pageVariant is Home
    const pageVariant = isProjectPage ? "/" : "";

    // Default for Home
    const headerLinks = [
        { link: "#", text: "Home" },
        { link: "#about", text: "About" },
        { link: "#projects", text: "Work" },
        { link: "#contact", text: "Contact" }
    ];

    // Update nav links per page
    const nav = (
        <nav className={styles.nav}>
            <ul>
                {headerLinks.map((link) => (
                    // Need a forward slash
                    <li key={link.text}><Link to={ pageVariant + link.link}>{link.text}</Link></li>
                ))}
            </ul>
        </nav>
    );

    return (
        <header className={styles.header}>
            {/* Left: Logo */}
            <Link to="/" className={styles.left}>Sara Toth</Link>

            {nav}

            {/* Right: Language button and Hamburger menu */}
            <div className={styles.right}>
                <select value={i18n.language} onChange={handleChange}>
                    <option value="en">EN</option>
                    <option value="kr">KR</option>
                </select>

                {/* Hamburger open/close */}
                <button onClick={toggleDropdown} className={styles.ham}>
                    {isDropdownOpen ? "✕" : "☰"}
                </button>

                {/* Dropdown menu */}
                {isDropdownOpen && (
                    <div className={styles.dropdownContainer}>
                        <Link to="/#">Home</Link>
                        <Link to="/#about" >About</Link>
                        <Link to="/#works" >Works</Link>
                        <Link to="/#contact" >Contact</Link>
                    </div>
                )}
            </div>

        </header>
    )
};

export default Header;