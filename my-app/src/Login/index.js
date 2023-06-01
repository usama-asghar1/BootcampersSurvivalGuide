import {Link} from "react-router-dom";
import './index.css';


function Login() {
    return (
     <div>
        <h1 className = "grid-title">Bootcamper's Survival Guide 🚀</h1>
    

      <div className="container">
        <h1 className = "login-heading">Login</h1>
        <form>
          <label className = "signin-label" htmlFor="username">Username:</label>
          <input className = "signin-input" type="text" id="username" name="username" />
          <br /><br />
          <label className = "signin-label" htmlFor="password">Password:</label>
          <input className = "signin-input" type="password" id="password" name="password" />
          <br /><br />
          <Link to="/grid">
            <button className = "signin-button" type="submit" value="Submit">Submit</button>
          </Link>
        </form>
      </div>
    </div>
    );
  }
  
  export default Login;
  