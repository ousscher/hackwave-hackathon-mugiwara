
import { DataGrid } from '@mui/x-data-grid';
import { Button, Chip, Checkbox } from '@mui/material';
import { useEffect ,useState} from 'react';
import axios from 'axios';

const agents = () => {

  const [agents, setAgents] = useState([]);
  const [error, setError] = useState(null); 

  const fetchAgents = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/dashboard/agents');
      setAgents(response.data);
      console.log(response.data)
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchAgents(); 
  }, []); 

      
  

 

  

  const getBackgroundColor = (etat) => {
    switch (etat) {
      case 'Disponible':
        return '#90ee90';
      case 'Appel en cours':
        return '#FCC43E';
      case 'Hors service':
        return '#FB7D5B';
      default:
        return 'transparent'; // fallback color if no match
    }
  };


    const columns = [
   
        { field: 'nom', headerName: 'Nom', width: 180 },
        { field: 'prenom', headerName: 'Prénom', width: 180 },
        { field: 'appels_par_jour', headerName: 'Nombre d\'appels/Jour', width: 140 },
        { field: 'contact', headerName: 'Contact', width: 240 },
        { field: 'etat', headerName: 'Etat', width: 180 ,
          renderCell: (params) => ( 
          <div>
          <Chip
            label={params.row.etat}
            style={{ 
              margin: 2, 
              backgroundColor: getBackgroundColor(params.row.etat) 
            }}
          />
          </div>
         )},
        
      ];

    
return(
    <div className='w-full flex justify-center items-center'>
    <div className="w-[60%] flex flex-col items-center justify-center " >
        <div className='w-full flex justify-start'>
        <h2 className='text-[#4D44B5] font-poppins font-bold text-2xl mt-16 '>Agents</h2>
        </div>
        
            <div className='w-full flex justify-end'>
            <div className='bg-[#4D44B5] font-poppins   text-[#F4F4F4]   ease-in-out h-14 rounded-3xl flex items-center  justify-center text-center w-60 space-x-4 cursor-pointer' >
             <span>Nouveau Agent</span>
            </div>
            </div>
            {}
            <div className='h-[600px] w-[950px] mt-6 '> 
              <DataGrid
            columns={columns}
            rows={agents}
            pageSize={10}
            hideFooterSelectedRowCount
            disableSelectionOnClick
          />
        </div>
    </div>
    </div>


);

}

export default agents