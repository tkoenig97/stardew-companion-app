import { Link } from "react-router-dom"

export const SignInPage = () => {
    return (
        <div className="menu page-content">
            <div className="signin">
                <h1>Sign In:</h1>
                <form>

                </form>
                <p>Don't have an account? <Link to={'/signup'}>Sign-Up!</Link></p>
            </div>
        </div>
    )
}