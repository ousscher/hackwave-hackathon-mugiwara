
import { DataGrid } from '@mui/x-data-grid';
import { useEffect ,useState} from 'react';
import axios from 'axios';
const appels = () => {
  const [Appels, setAppels] = useState([]);
  const [error, setError] = useState(null); 

  const fetchaAppel = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/dashboard/appels');
      setAppels(response.data);
      console.log(response.data)
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchaAppel(); 
  }, []); 


    const columns = [
   
        { field: 'nom', headerName: 'Nom', width: 160 },
        { field: 'prenom', headerName: 'Prénom', width: 160 },
        { field: 'numero_telephone', headerName: 'Numéro de Téléphone', width: 150 },
        { field: 'duree_appel', headerName: 'Durée d\'appel', width: 130 },
        { field: 'cause_appel', headerName: 'La Cause d\'appel', width: 210 },
        { field: 'profile', headerName: 'Profile', width: 180 },
        { field: 'banque', headerName: 'La Banque', width: 180 },
      ];
return(
    <div className=' w-full flex justify-center items-center'>
    <div className="w-[100%] flex flex-col items-center justify-center " >
        <div className='w-full flex justify-start ml-28'>
        <h2 className='text-[#4D44B5] font-poppins font-bold text-2xl mt-16 '>Appels</h2>
        </div>
            <div className='h-[600px] max-w-[1200px] mt-6 flex '> 
              <DataGrid
            columns={columns}
            rows={Appels}
            pageSize={10}
            hideFooterSelectedRowCount
            disableSelectionOnClick
          />
          </div>
    </div>
    </div>


);

}

export default appels