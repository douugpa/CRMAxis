import './menu.css';
import { Link } from 'react-router-dom';
import React from 'react';
import { Authentication } from '../../Context/auth';

function Menu(){

  const {setLoged} = React.useContext(Authentication);

  function Logout(){
    setLoged(false);
    localStorage.removeItem("loged");
  };


  return <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">

    <a className="navbar-brand" href="#"><i className="fa-brands fa-cloudversify fa-2x"></i></a>
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
      <ul className="navbar-nav">

        <li className="nav-item">
            <Link to="/app" className="nav-link active" aria-current="page" href="#">Home</Link>
        </li>

        <li className="nav-item">
          <Link to="/app/NovoCliente" className="nav-link active" aria-current="page" href="#">Novo Cliente</Link>
        </li>

        <li className="nav-item">
          <a onClick={Logout} className="nav-link active logout" aria-current="page">Sair</a>
        </li>

      </ul>
    </div>
  </div>
</nav>
}

export default Menu;