import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = ({isProjectPage}) => {
    const {t, i18n} = useTranslation();

    const switchLang = () => {
        const nextLang = i18n.language === "en" ? "kr" : "en";
        i18n.changeLanguage(nextLang);
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
        <nav>
            <ul>
                {headerLinks.map((link) => (
                    // Need a forward slash
                    <li key={link.text}><Link to={ pageVariant + link.link}>{link.text}</Link></li>
                ))}
            </ul>
        </nav>
    );

    return (
        <header>
            {/* Left: Logo */}
            <Link to="/">Sara Toth</Link>

            {/* Center: Navigation Links */}
            {nav}

            {/* Right: Language button */}
            <button className="language" onClick={switchLang}>{t("lang")}</button>
            {/* Far Right: Hamburger Menu */}
            <button aria-label="Menu" className="header__hamburger-open">&#9776;</button>
            <button className="header__hamburger-close">&#x2715;</button>

            {/* Dropdown menu that appears on small screens */}
            <div>
                <Link to="/#">Home</Link>
                <Link to="/#about" >About</Link>
                <Link to="/#works" >Works</Link>
                <Link to="/#contact" >Contact</Link>
            </div>

        </header>
    )
};

export default Header;