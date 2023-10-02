import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
        <Link className="navbar-brand ms-auto me-auto" to="/">Inicio</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/nosotros">Nosotros</Link>
          </div>
        </div>
        <div className="collapse navbar-collapse float-start" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/registrarse">Registro</Link>
          </div>
        </div>
        <div className="collapse navbar-collapse float-start" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/iniciarsesion">Login</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
