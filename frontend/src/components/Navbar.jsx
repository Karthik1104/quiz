import { NavLink } from "react-router-dom";

const Navbar = () => (
  <header className="navbar">
    <div className="navbar__brand">
      <span className="navbar__badge">NPTEL</span>
      <div>
        <h1>NPTEL Quiz App</h1>
        <p>Practice smarter, review faster.</p>
      </div>
    </div>

    <nav className="navbar__links" aria-label="Primary">
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/mock">Mock Quiz</NavLink>
    </nav>
  </header>
);

export default Navbar;
