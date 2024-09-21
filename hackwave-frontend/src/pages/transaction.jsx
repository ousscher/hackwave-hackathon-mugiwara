import React from 'react';
import Appels from '../components/appels';
import { DataGrid } from '@mui/x-data-grid';
import Navbar from '../components/navbar';
import { useEffect ,useState} from 'react';
import axios from 'axios';

const Transactions = () => {

    const [Transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null); 

  const fetchaAppel = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/dashboard/transactions');
      setTransactions(response.data);
      console.log(response.data)
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchaAppel(); 
  }, []); 

    const columns = [
   
        { field: 'numero_carte', headerName: 'Numero de carte', width: 240 },
        { field: 'id_transaction', headerName: 'ID Transaction', width: 120 },
        { field: 'date_transaction', headerName: 'Date', width: 150 },
        { field: 'heure_transaction', headerName: 'Heure', width: 150 },
        { field: 'montant', headerName: 'Montant', width: 160 },
        { field: 'statut', headerName: 'Statut', width: 180 },
        { field: 'type_transaction', headerName: 'Type de Transaction', width: 180 },
        { field: 'code_statut', headerName: 'Code Statut', width: 180 },
        { field: 'explication', headerName: 'Explication', width: 600 },
        // { field: 'type_transaction', headerName: 'La Banque', width: 180 },
      ];
return(
    <>
    <Navbar/>
    <div className="w-[100%] flex flex-col items-center justify-center " >
        <div className='w-full flex justify-start ml-20'>
        <h2 className='text-[#4D44B5] font-poppins font-bold text-2xl mt-16 '>Transactions</h2>
        </div>
          <div className='w-full flex justify-center items-center '>
            <div className='h-[600px] max-w-[1200px] mt-6 flex'> 
                <DataGrid
              columns={columns}
              rows={Transactions}
              className=''
              pageSize={10}
              hideFooterSelectedRowCount
              disableSelectionOnClick
            />
          </div>
        </div>
    </div>
    </>

);
}  

export default Transactions;