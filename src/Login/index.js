import {Link} from "react-router-dom";


function Login() {


    return (
        <div>
            <h1>Login</h1>
            <form>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" /><br /><br />
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" /><br /><br />
                <Link to="/grid">
                <button type="submit" value="Submit" >Submit</button>
                </Link>
            </form>
            
        </div>
    )
}

export default Login;