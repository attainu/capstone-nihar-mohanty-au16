import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  return (
    <div className="register">
      <span className="register-title">Sign-Up</span>
      <form className="register-form">
        <label>Username</label>
        <input
          className="register-input"
          type="text"
          placeholder="Give a cool name yo..."
        />
        <label>E-mail</label>
        <input
          className="register-input"
          type="email"
          placeholder="Please enter your email"
        />
        <label>Password</label>
        <input
          className="register-input"
          type="password"
          placeholder="Please Enter Your Password"
        />

        <button className="registerr-button">Sign-Up</button>
        {/* <button className="register-login-button">Sign-In</button> */}
        <Link className="link" to="/login">Signin</Link>
      </form>
    </div>
  );
}

export default Register;
