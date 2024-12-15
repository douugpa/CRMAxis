import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './newAcc.css';
import firebase from '../Config/firebase';
import 'firebase/auth';

function NewAcc(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [sucess, setSucess] = useState('');

  function setUser(){
    setMessage(''); 


    if (!email) {
      setMessage('Informe o E-mail!');
      return;
    } else if (!password) {
      setMessage('Informe a senha!');
      return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
      setSucess('S');
    }).catch(error => {
      setSucess('N');
      if(error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
        setMessage('A senha deve possuir no mínimo 6 caracteres!');
      } 
      else if (error.message === 'Firebase: The email address is already in use by another account. (auth/email-already-in-use).') {
        setMessage('O e-mail informado já está sendo utilizado!');
      } 
      else if (error.message = 'Firebase: The email address is badly formatted. (auth/invalid-email).') {
        setMessage('E-mail inválido!');
      } 
      else {
        setMessage('Erro ao criar conta: ' + error.message)
      }
    })

  }

  return <div className="d-flex align-items-center text-center form-container">
      <form className="form-signin">
        <img className="mb-0" src="../img/logo.png" alt="Logo CRM Axis" width="200" height="200" />
        <h1 className="h3 mb-3 fw-normal">Criar Conta</h1>

        <div className="form-floating">
          <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required/>
          <label for="floatingInput" lang="en">E-mail</label>
        </div>

        <div className="form-floating">
          <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Password" required/>
          <label for="floatingPassword">Senha</label>
        </div>

        <button onClick={setUser} className="btn btn-primary w-100 py-2" type="button">Criar conta</button>

        { message.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{message}</div> : null }
        { sucess === "S" ? <Navigate to={'/app/Home'} /> : null}

        <div className="login-links mt-5">
          <Link to="/app" className="mx-3">Já tenho uma conta</Link>
        </div>
        
        <p className="mt-5 mb-3 text-body-secondary" lang="en">&copy; Powered By DougX</p>
     </form>
  </div>
}

export default NewAcc;