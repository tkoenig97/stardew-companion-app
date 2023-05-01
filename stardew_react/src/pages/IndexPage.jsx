import { Link } from "react-router-dom";

export const IndexPage = () => {
    return (
        <div className="menu page-content">
            <h1>Welcome!</h1>
            <img className="index-img" src="src/assets/images/brown-chicken.png" />
            <p className="index-paragraph">
                Welcome to our Stardew Valley helper website! Our site is
                designed to provide you with all the tools and information you
                need to become a successful farmer in Stardew Valley. From a
                comprehensive calendar that shows all the important events
                throughout the year, to a database of villagers' likes and
                dislikes, and information on every crop, foragable, and animal
                product in the game, we've got you covered. Our goal is to make
                your time in Stardew Valley as efficient and enjoyable as
                possible, by providing you with all the information you need in
                one convenient location.
            </p>
            <Link to={'/signin'}>Sign in to get started</Link>
            <footer>Check us out on <a className="github-link" href="https://github.com/tkoenig97/stardew-companion-app">Github</a></footer>
        </div>
    );
};
