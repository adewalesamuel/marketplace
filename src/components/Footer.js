import { Components } from "../components";

export function Footer(props) {
    return (
        <footer className="footer">
            <Components.FooterTop />
            <Components.FooterMiddle />
            <Components.FooterBottom />
        </footer>
    )
}