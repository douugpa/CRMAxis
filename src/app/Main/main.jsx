import './main.css';
import Menu from '../Components/Menu/menu';
import ClientList from '../Components/ClientList/clientList';
import { collection, getFirestore, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SweetAlert from 'react-bootstrap-sweetalert';
import pdfClients from '../Reports/Clients/clients';

function Main(){

  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState('');
  const [deleted, setDeleted] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [confirmedId, setConfirmedId] = useState('');


  function deleteUser(id){
    const db = getFirestore();

    deleteDoc(doc(db, "Clientes", id)).then(() => {
      setDeleted(id);
      setConfirmed(false);
    });
  }

  function confirmDeleteUser(id){
    setConfirmedId(id);
    setConfirmed(true);
  }

  useEffect(() => {
    let cliList = [];
    const fetchData = async () => {
      const db = getFirestore();
      const clientsRef = collection(db, 'Clientes');
      const result = await getDocs(clientsRef);
      
      result.forEach((doc) => {
        if (doc.data().name.indexOf(search) >= 0){
          cliList.push({
            id: doc.id,
            name: doc.data().name,
            email: doc.data().email,
            phone: doc.data().phone
          });
        }
      });
      
      setClients(cliList);
    };
 
    fetchData();
  }, [search, deleted]); 


  return <div>
    <Menu/>
    <div className="container-fluid titulo">
      <h1>Cadastro de Clientes...</h1>

      <div className="row">
        <div className="col-4">
          <Link to="/app/NovoCliente" className="btn btn-primary btn-client" type="button"><i className="fa-solid fa-plus"></i> Cliente</Link>
          <button onClick={() => {pdfClients(clients)}} className="btn btn-danger btn-client" type="button"><i className="fa-regular fa-file-pdf"></i> Gerar PDF</button>       
        </div>

        <div className="col-8">

          <div className="input-group mb-3">
            <input onChange={(e) => {setSearch(e.target.value)}} type="text" className="form-control" placeholder="Pesquisar clientes..." aria-label="Pesquisar clientes..." aria-describedby="button-addon2"/>            
          </div>

        </div>
      </div>

      <ClientList arrayCli ={clients} delete={confirmDeleteUser}/>

      {
        confirmed ? <SweetAlert
            warning
            showCancel
            showCloseButton={true}
            confirmBtnText="Sim"
            confirmBtnBsStyle="danger"
            cancelBtnText="Não"
            cancelBtnBsStyle="light"
            title="Exclusão"
            reverseButtons
            onConfirm={() => deleteUser(confirmedId)}
            onCancel={() => {setConfirmed(false)}}
            >Deseja excluir o cliente selecionado?
          </SweetAlert> : null }
    </div>
  </div>
}

export default Main;