import { Link, useNavigate } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className="menu navbar">
            <Link to={'/'}>
                <img
                    className="navimg"
                    src="src/assets/images/green-junimo.png"
                />
            </Link>
            <Link to={'/calendar'}>| Seasonal Calendar |</Link>
            <Link to={'/gifts'}>NPC Gifts |</Link>
            <Link to={'/'}>Farming |</Link>
            <Link to={'/'}>Livestock |</Link>
            <Link to={'/'}>Recipes |</Link>
            <Link to={'/signin'}>Sign-In/Sign-Up</Link>
            <form>
                <input name="search" placeholder="Search"></input>
                <button className="submit-button" type="submit">
                    Search
                </button>
            </form>
        </div>
    );
};
