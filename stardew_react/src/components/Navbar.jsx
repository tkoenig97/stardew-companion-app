import { Link } from 'react-router-dom';

export const Navbar = ( { user }) => {
    return (
        <div className="menu navbar">
            <Link to={'/'}>
                <div className="nav-link">
                    <img
                        className="navimg"
                        src="src/assets/images/green-junimo.png"
                    />
                    <h2 className="nav-label">Home</h2>
                </div>
            </Link>
            <Link to={'/calendar'}>
                <div className="nav-link">
                    <img
                        className="navimg"
                        src="src/assets/images/calendar.png"
                    />
                    <h2 className="nav-label">Calendar</h2>
                </div>
            </Link>
            <Link to={'/gifts'}>
                <div className="nav-link">
                    <img
                        className="navimg"
                        src="src/assets/images/brown-chicken.png"
                    />
                    <h2 className="nav-label">NPC Gifts</h2>
                </div>
            </Link>
            <Link to={'/farming'}>
                <div className="nav-link">
                    <img
                        className="navimg"
                        src="src/assets/images/parsnip.png"
                    />
                    <h2 className="nav-label">Farming</h2>
                </div>
            </Link>
            <Link to={'/livestock'}>
                <div className="nav-link">
                    <img
                        className="navimg"
                        src="src/assets/images/white-cow.png"
                    />
                    <h2 className="nav-label">Livestock</h2>
                </div>
            </Link>
            <Link to={'/recipes'}>
                <div className="nav-link">
                    <img
                        className="navimg"
                        src="src/assets/images/burger.png"
                    />
                    <h2 className="nav-label">Recipes</h2>
                </div>
            </Link>
            <Link to={'/bundles'}>
                <div className="nav-link">
                    <img
                        className="navimg"
                        src="src/assets/images/community-center.png"
                    />
                    <h2 className="nav-label">Bundles</h2>
                </div>
            </Link>
            {user ? (
                <Link to={'/profile'}>
                    <div className="nav-link">
                        <img
                            className="navimg"
                            src="src/assets/images/brown-chicken.png"
                        />
                        <h2 className="nav-label">Profile</h2>
                    </div>
                </Link>
            ) : (
                <Link to="/signin">
                    <div className="nav-link">
                        <img
                            className="navimg"
                            src="src/assets/images/brown-chicken.png"
                        />
                        <h2 className="nav-label">Log-In</h2>
                    </div>
                </Link>
            )}
            <form>
                <input name="search" placeholder="Search"></input>
                <button className="submit-button" type="submit">
                    Search
                </button>
            </form>
        </div>
    );
};
