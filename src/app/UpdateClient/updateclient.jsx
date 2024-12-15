import './updateclient.css';
import Menu from '../Components/Menu/menu';
import { Navigate, Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';

function UpdateClient(){

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('N');
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const clientsRef = doc(db, "Clientes", id); 
    const getClients = async () => {

       await getDoc(clientsRef).then((result) => {
        setName(result.data().name);
        setEmail(result.data().email);
        setPhone(result.data().phone);

        setMessage('');
      }).catch((error) => {
        setMessage(error);
        setSuccess('N');
      });

    };
    getClients();

  }, [id]);

  function postClient(){

    const db = getFirestore();

        if (name.length === 0) {
          setMessage('Informe o nome!');
        } 
        else if (email.length === 0) {
          setMessage('Informe o e-mail!');
        } 
        else if (phone.length === 0) {
          setMessage('Informe o telefone!')
        }
        else { 
          const clientsRef = doc(db, "Clientes", id); 
          updateDoc(clientsRef, {
            email: email,
            name: name,
            phone: phone             
          }).then(() => {
            setMessage('');
            setSuccess('S');
          }).catch((error) => {
            setMessage(error);
            setSuccess('N');
          });
        };
  };
 
  return <div>
    <Menu/>

    <div className="container-fluid titulo">
      <div className="offset-lg-3 col-lg-6 text-center">
        <h1>Editar Cliente</h1>

        <form>
          <div className="mb-3">
            <label htmlFor="userId" className="form-label">Código</label>
            <input value={id} type="text" className="form-control" id="userId" aria-describedby="userId" disabled />
          </div>

          <div className="mb-3">
            <label htmlFor="userName" className="form-label">Nome</label>
            <input onChange={(e) => {setName(e.target.value)}} value={name} type="text" className="form-control" id="userName" aria-describedby="userName" />
          </div>

          <div className="mb-3">
            <label htmlFor="userEmail" className="form-label">Email</label>
            <input onChange={(e) => {setEmail(e.target.value)}} value={email} type="email" className="form-control" id="userEmail" aria-describedby="userEmail" />
          </div>

          <div className="mb-3">
            <label htmlFor="userPhone" className="form-label">Telefone</label>
            <input onChange={(e) => {setPhone(e.target.value)}} value={phone} type="text" className="form-control" id="userPhone" aria-describedby="userPhone" />
          </div>

          <div className="text-center">
            <Link to='/app/Home' className="btn btn-outline-danger act-btn">Cancelar</Link>
            <button onClick={postClient} type="button" className="btn btn-primary act-btn">Confirmar</button>
          </div>

          { message.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{message}</div> : null }
          { success === "S" ? <Navigate to={'/app/Home'} /> : null}

        </form>
      </div>
    </div>
  </div>
}

export default UpdateClient;