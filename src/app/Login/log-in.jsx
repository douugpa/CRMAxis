import React from 'react';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './login.css';
import firebase from '../Config/firebase';
import 'firebase/auth';
import { Authentication } from '../Context/auth';


function Login(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [sucess, setSucess] = useState('');
  const { setLoged } = React.useContext(Authentication);

  function loginUser(){
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(firebaseUser){
      localStorage.setItem("loged", true);
      setLoged(true);
      setSucess("S");
    }).catch(function(){
      localStorage.setItem("loged", false);
      setLoged(false);
      setSucess("N");
    })
  }

  return <div className="d-flex align-items-center text-center form-container">
      <form className="form-signin">
        <img className="mb-0" src="./img/logo.png" alt="Logo CRM Axis" width="200" height="200" />
        <h1 className="h3 mb-3 fw-normal" lang="en">Login</h1>

        <div className="form-floating">
          <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required/>
          <label htmlFor="floatingInput" lang="en">E-mail</label>
        </div>

        <div className="form-floating">
          <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Password" required/>
          <label htmlFor="floatingPassword">Senha</label>
        </div>

        <button onClick={loginUser} className="btn btn-primary w-100 py-2" type="button">Entrar</button>

        { sucess === "N" ? <div className="alert alert-danger mt-2" role="alert">E-mail ou senha inválida!</div> : null }
        { sucess === "S" ? <Navigate to={'/app/Home'} /> : null}

        <div className="login-links mt-5">
          <Link to="/app/RecuperarSenha" className="mx-3">Esqueci minha senha</Link>
          <Link to="/app/CriarConta" className="mx-3">Criar uma conta</Link>
        </div>
        
        <p className="mt-5 mb-3 text-body-secondary" lang="en">&copy; Powered By DougX</p>
     </form>
  </div>
}

export default Login;