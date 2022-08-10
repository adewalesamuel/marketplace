import { Link } from "react-router-dom";

export function MainMenu(props) {
    return (
        <nav className="main-nav">
            <ul className="menu sf-arrows">
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/articles">Articles</Link>
                </li>
                <li>
                    <Link to="a-proppos">A propos</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}