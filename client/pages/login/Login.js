import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <span className="login-title">Sign-In</span>
      <form className="login-form">
        <label>E-mail</label>
        <input
          className="login-input"
          type="email"
          placeholder="Please enter your email"
        />
        <label>Password</label>
        <input
          className="login-input"
          type="password"
          placeholder="Please Enter Your Password"
        />
        <button className="login-button">Sign-In</button>
        {/* <button className="register-button">Sign-Up</button> */}
        <Link className="link" to="/register">
          SignUp
        </Link>
      </form>
    </div>
  );
}

export default Login;
