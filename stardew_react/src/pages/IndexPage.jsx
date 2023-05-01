import { Link } from 'react-router-dom';

export const IndexPage = () => {
    return (
        <div className="menu page-content">
            <h1>Welcome!</h1>
            <img
                className="index-img"
                src="src/assets/images/brown-chicken.png"
                alt="Brown Chicken"
            />
            <p className="index-paragraph">
                Welcome to Stardew Central! Our site is designed to provide you
                with all the tools and information you need to become a
                successful farmer in Stardew Valley. Our resources include a
                comprehensive calendar of all important in-game events, as well
                as a database of villagers' likes and dislikes, and detailed
                information on every crop, forageable, and animal product. Our
                goal is to make your time in Stardew Valley as efficient and
                enjoyable as possible, by providing you with all the information
                you need in one convenient location.
            </p>
            <Link to={'/signin'}>Sign in to get started</Link>
            <footer>
                <div className="store-links">
                    Try the game for yourself:
                    <a
                        className="index-links"
                        target="_blank"
                        href="https://store.steampowered.com/app/413150/Stardew_Valley/"
                    >
                        Steam
                    </a>
                    <a
                        className="index-links"
                        target="_blank"
                        href="https://www.gog.com/game/stardew_valley"
                    >
                        GOG
                    </a>
                    <a
                        className="index-links"
                        target="_blank"
                        href="https://www.playstation.com/en-us/games/stardew-valley-ps4/"
                    >
                        Playstation
                    </a>
                    <a
                        className="index-links"
                        target="_blank"
                        href="https://www.xbox.com/en-us/games/store/stardew-valley/c3d891z6tnqm"
                    >
                        Xbox
                    </a>
                    <a
                        className="index-links"
                        target="_blank"
                        href="https://www.nintendo.com/games/detail/stardew-valley-switch/"
                    >
                        Switch
                    </a>
                </div>
                <a
                    className="index-links"
                    target="_blank"
                    href="https://twitter.com/ConcernedApe"
                >
                    Follow the Developer on Twitter
                </a>
                <a
                    className="index-links"
                    target="_blank"
                    href="https://github.com/tkoenig97/stardew-companion-app"
                >
                    Check us out on Github
                </a>
            </footer>
        </div>
    );
};
