import { Components } from ".";

export function Header(props) {
    return (
        <header className="header header-14">
            <Components.HeaderTop />
            <Components.HeaderMiddle />
            <Components.HeaderBottom />
        </header>
    )
}