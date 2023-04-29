import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <div className="menu navbar">
            <img className="navimg" src="src/assets/images/greenjunimo.png" />
            <Link to={'/'}>Home</Link>
            <Link to={'/calendar'}>Seasonal Calendar</Link>
            <Link to={'/'}>Page 2</Link>
            <Link to={'/'}>Page 3</Link>
            <Link to={'/signin'}>Sign-In/Sign-Up</Link>
            <form>
                <input name="search" placeholder="Search"></input>
                <button className='submit-button' type="submit">Search</button>
            </form>
        </div>
    )
}