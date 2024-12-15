import { useState } from 'react';
import { Link } from 'react-router-dom';
import './resetpassword.css';
import firebase from '../Config/firebase';
import 'firebase/auth';

function ResetPassword(){
  
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sucess, setSucess] = useState('');

  function setPassword(){
    
    firebase.auth().sendPasswordResetEmail(email).then(() => {
      setMessage('');
      setSucess('E-mail enviado com sucesso!');
    }).catch(error => {
      setSucess('');
      setMessage('Erro ao enviar email: ' + error.message);
    })
  }

  return <div className="d-flex align-items-center text-center form-container">
      <form className="form-signin">
        <img className="mb-0" src="../img/logo.png" alt="Logo CRM Axis" width="200" height="200" />
        <h1 className="h3 mb-3 fw-normal">Recuperar Senha</h1>

        <div className="form-floating">
          <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control mb-2" id="floatingInput" placeholder="name@example.com" required/>
          <label for="floatingInput" lang="en">E-mail</label>
        </div>

        <button onClick={setPassword} className="btn btn-primary w-100 py-2" type="button">Enviar</button>

        { message.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{message}</div> : null }
        { sucess.length > 0 ? <div className="alert alert-success mt-2" role="alert">{sucess}</div> : null }

        <div className="login-links mt-5">
          <Link to="/app/CriarConta" className="mx-3">Criar uma conta</Link>
        </div>
        
        <p className="mt-5 mb-3 text-body-secondary" lang="en">&copy; Powered By DougX</p>
     </form>
  </div>
}

export default ResetPassword;