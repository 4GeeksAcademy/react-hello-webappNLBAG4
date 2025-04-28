import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: "rgba(0,0,0,0.8)", backdropFilter: "blur(6px)", zIndex: "1050" }}>
      <div className="container">
        <Link className="navbar-brand starwars-font" to="/">
          <i className="fas fa-jedi me-2"></i> Star Wars Blog
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/personajes">
                <i className="fas fa-user-astronaut me-1"></i> Personajes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/planetas">
                <i className="fas fa-globe me-1"></i> Planetas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/curiosidades">
                <i className="fas fa-lightbulb me-1"></i> Curiosidades
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cronologia">
                <i className="fas fa-clock me-1"></i> Cronología
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;