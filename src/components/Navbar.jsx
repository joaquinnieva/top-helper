import { NavLink } from 'react-router-dom';
import { authLogout } from '../functions/dbAuth';
import { getUser } from '../functions/dbGetUserLoged';
import { isLoged } from '../functions/userIsLoged';
import TopEleven from '../images/top-eleven.png';
import '../styles/Navbar.css';

const Navbar = () => {
  const getUserLogged = () => {
    getUser();
  };
  const userLogout = () => {
    authLogout();
  };
  const userLoged = () => {
    isLoged();
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={TopEleven} width={40} height={40} alt="top eleven" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="forum">
                Foro
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="docs">
                Documentación
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="tools">
                Herramientas
              </NavLink>
            </li>
            <NavLink className="nav-link" to="register">
              <i className="bi bi-person-circle"></i> /register
            </NavLink>
            <NavLink className="nav-link" to="login">
              /login
            </NavLink>
          </ul>
          <div className="d-flex">
            <button className="btn btn-primary" onClick={getUserLogged}>
              getuser
            </button>
            <button className="btn btn-primary" onClick={userLoged}>
              is loged?
            </button>
            <button className="btn btn-primary" onClick={userLogout}>
              <i className="bi bi-box-arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
