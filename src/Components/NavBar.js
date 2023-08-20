import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <h1>
            <Link to="/books" className="navbar-link">
              Books
            </Link>
          </h1>
          <div>
            <Link to="/books/new" className="navbar-button">
              New City
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}