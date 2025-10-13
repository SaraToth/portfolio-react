import { Link } from "react-router-dom";

const Header = () => {

    const hamburger = false;

    if (!hamburger) {
        return (
            <header>
                {/* Left: Logo */}
                <div className="header__logo"><a href="/#home">Sara Toth</a></div>

                {/* Center: Navigation Links */}
                <nav>
                    <ul>
                        <li><Link to="/">Sara Toth</Link></li>
                        <li><Link to="/#" >Home</Link></li>
                        <li><Link to="/#about" >About</Link></li>
                        <li><Link to="/#works" >Works</Link></li>
                        <li><Link to="/#contact" >Contact</Link></li>
                    </ul>
                </nav>

                {/* Right: Language button */}
                <Link to="/" className="language" data-langauge="kr" >KR</Link>
            </header>
        )
    } else if (hamburger){
        return(
            <header className="header">
                {/* Left: Logo */}
                <div className="header__logo"><a href="/#home">Sara Toth</a></div>

                {/* Right: Language button */}
                <Link to="/" className="language" data-langauge="kr" >KR</Link>

                {/* Far Right: Hamburger Menu */}
                <button aria-label="Menu" className="header__hamburger-open">&#9776;</button>
                <button className="header__hamburger-close">&#x2715;</button>

                {/* Dropdown menu that appears on small screens */}
                <div>
                    <Link to="/#" >Home</Link>
                    <Link to="/#about" >About</Link>
                    <Link to="/#works" >Works</Link>
                    <Link to="/#contact" >Contact</Link>
                </div>

            </header>
        )
    }
};

export default Header;