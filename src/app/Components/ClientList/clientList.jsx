import '../ClientList/clientList.css';
import 'firebase/auth';
import { Link } from 'react-router-dom';

function ClientList(props){

 return <table className="table table-hover table-bordered">
          <thead>
            <tr className="table-secondary">
              <th scope="col">Código</th>
              <th scope="col">Nome</th>
              <th scope="col">E-Mail</th>
              <th scope="col">Telefone</th>
              <th scope="col" className="act-col"></th>
            </tr>
          </thead>
          
          <tbody>

            {
              props.arrayCli.map((client) => { 
                return <tr key={client.id}>
                <th scope="row">{client.id}</th>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.phone}</td>
                <td>
                  <Link to={`/app/EditarCliente/${client.id}`}><i className="fa-regular fa-pen-to-square act-icon"></i></Link>
                  <Link to='#'onClick={() => {props.delete(client.id)}} ><i className="fa-solid fa-trash-can _trash"></i></Link>
                </td>     
              </tr>
              })
            }

          </tbody>
        </table>
}

export default ClientList;