import Logo from "./Logo";

export default function Header() {
    return (
    <header>
        <div className="container">
            <div id="page-header">
                <Logo />
                <nav>
                    <ul>
                        <li>
                            <a href="#">CHARACTERS</a>
                        </li>
                        <li className="active">
                            <a href="#">COMICS</a>
                        </li>
                        <li>
                            <a href="#">MOVIES</a>
                        </li>
                        <li>
                            <a href="#">TV</a>
                        </li>
                        <li>
                            <a href="#">GAMES</a>
                        </li>
                        <li>
                            <a href="#">COLLECTIBLES</a>
                        </li>
                        <li>
                            <a href="#">VIDEOS</a>
                        </li>
                        <li>
                            <a href="#">FANS</a>
                        </li>
                        <li>
                            <a href="#">NEWS</a>
                        </li>
                        <li>
                            <a href="#">SHOP</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    );
}