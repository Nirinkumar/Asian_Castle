import { Link } from "react-router-dom"
import "./pages.css"

export default function Login(){
    return(
        <div className="login">
            <div className="login-container">
                <form className="login-form">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Enter your email" />
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Enter your password" />
                </form>
                <button className="login-btn">Login</button>
                {/* <div className="forget-password"> */}
                    <Link className="forget-password">Forgotten password?</Link>
                {/* </div> */}
                <div className="signup">
                    <p>New user?</p>
                    <Link className="signup-link">Sign up</Link>
                </div>
            </div>

        </div>
    )
}