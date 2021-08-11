import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const user = false;
  return (
    <div className="nav">
      <div className="nav-left">
        <i className="nav-icon fab fa-facebook-f"></i>
        <i className="nav-icon fab fa-unsplash"></i>
        <i className="nav-icon fab fa-instagram-square"></i>
        <i className="nav-icon fab fa-twitter"></i>
      </div>
      <div className="nav-center"></div>
      <ul className="nav-list">
        <Link
          to="/"
          style={{ textDecoration: "none", color: "inherit" }}
          className="nav-list-item"
        >
          HOME
        </Link>
        <Link
          to="/"
          style={{ textDecoration: "none", color: "inherit" }}
          className="nav-list-item"
        >
          ABOUT
        </Link>
        <Link
          to="/"
          style={{ textDecoration: "none", color: "inherit" }}
          className="nav-list-item"
        >
          CONTACT
        </Link>
        <Link
          to="/write"
          style={{ textDecoration: "none", color: "inherit" }}
          className="nav-list-item"
        >
          WRITE
        </Link>
        <Link
          to="/"
          style={{ textDecoration: "none", color: "inherit" }}
          className="nav-list-item"
        >
          {user && "LOGOUT"}
        </Link>
      </ul>
      <div className="nav-right">
        {user ? (
          <img
            className="nav-image"
            src="https://images3.alphacoders.com/678/thumb-1920-678085.jpg"
            alt=""
          />
        ) : (
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link className="link" to="/login">
                SignIn
              </Link>
            </li>
            <li className="nav-list-item">
              <Link className="link" to="/register">
                SignUp
              </Link>
            </li>
          </ul>
        )}

        <i className="nav-search-icon fas fa-search"></i>
      </div>
    </div>
  );
}
