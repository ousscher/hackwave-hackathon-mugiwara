import React , {useState,useEffect} from 'react';  
import Navbar from '../components/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import ai from '../assets/ai.png';
import phone from '../assets/phone.png';
import response from '../assets/response.png';
import f1 from '../assets/f1.png';
import f2 from '../assets/f2.png';
import f3 from '../assets/f3.png';




const AppelSimulation = () => {
    const [showF1, setShowF1] = useState(false);
    const [showF2, setShowF2] = useState(false);
    const [showF3, setShowF3] = useState(false);
    const [agents, setAgents] = useState(4);
    const [agentList, setAgentList] = useState([]);
    const [calls, setCalls] = useState(20);
    const [responses, setResponses] = useState(5);
    const [randomData, setRandomData] = useState([]);
    let normalCallsQueue = []; 
    let urgentCallsQueue = [];
    const [normalFile , setNormalFile] = useState([]);
    const [urgentFile , setUrgentFile] = useState([]);

    useEffect(() => {
        const newAgents = Array.from({ length: agents }, (_, index) => ({
            id: index + 1,
            is_available: true,
            completedCalls: 0,
        }));
        setAgentList(newAgents);
    }, [agents]);

    const incrementAgents = () => {
        if (agents < 9) setAgents(agents + 1);
      };
    
      const decrementAgents = () => {
        if (agents > 1) setAgents(agents - 1);
      };
    
      const incrementCalls = () => setCalls(calls + 1);
      const decrementCalls = () => {
        if (calls > 0) setCalls(calls - 1);
      };
    
      const incrementResponses = () => setResponses(responses + 1);
      const decrementResponses = () => {
        if (responses > 0) setResponses(responses - 1);
      };

      const handleAgentsChanges = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value)) {
          setAgents(value);
        }
      };

      const handleCallsChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value)) {
          setCalls(value);
        }
      };

      const handleResponsesChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value)) {
          setResponses(value);
        }
      };

      function generateRandomData(nbAppels, responses) {
        const randomBool = () => Math.random() < 0.5;
        const randomCallDuration = () => Math.floor(Math.random() * (6 - 3 + 1)) + 3;
        const data = [];
        for (let i = 0; i < responses; i++) {
          data.push({
            id: i,
            acceptAutomaticResponse: true,
            isUrgent: false, 
            callDuration: randomCallDuration(),
          });
        }
      
        for (let i = responses; i < nbAppels; i++) {
          data.push({
            id: i,
            acceptAutomaticResponse: false,
            isUrgent: randomBool(),
            callDuration: randomCallDuration(),
          });
        }
      
        for (let i = data.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [data[i], data[j]] = [data[j], data[i]];
        }
      
        return data;
      }
      const handleLaunch = () => {
        const data = generateRandomData(calls, responses);
        console.log(data);
        setRandomData(data);
    
        let index = 0;
    
        const processCall = () => {
            if (index >= data.length && urgentCallsQueue.length == 0 && normalCallsQueue.length == 0) {
                return; 
            }
            let call; 
            if (index < data.length) {
                call = data[index];
                if (!call.acceptAutomaticResponse){
                    if (call.isUrgent){
                        urgentCallsQueue.push(call);
                        setUrgentFile(urgentCallsQueue);
                    }else{
                        normalCallsQueue.push(call);
                        setNormalFile(normalCallsQueue);
                    }
                }
            }
            
            setShowF1(true);  
            setShowF2(false);
            setShowF3(false);
    
            setTimeout(() => {
                if (call && call.acceptAutomaticResponse) {
                    setShowF2(true);  
                    setShowF3(false);
                } else {
                    // const availableAgentIndex = agentList
                    //     .filter(agent => agent.is_available)  
                    //     .reduce((minIndex, agent, index, availableAgents) => {
                    //         if (minIndex === -1 || agent.completedCalls < availableAgents[minIndex].completedCalls) {
                    //         return index; 
                    //         }
                    //         return minIndex;  
                    //     }, -1);

                        const availableAgentIndex = agentList.reduce((minIndex, agent, index) => {
                            if (agent.is_available) {
                              if (minIndex === -1 || agent.completedCalls < agentList[minIndex].completedCalls) {
                                return index;  
                              }
                            }
                            return minIndex;  
                          }, -1);
                    
                    // const availableAgentIndex = agentList.findIndex(agent => agent.is_available);
                    if(availableAgentIndex !== -1){
                        if(urgentCallsQueue.length > 0){
                            call = urgentCallsQueue.shift();
                            setUrgentFile(urgentCallsQueue);
                        }
                        else{
                            call = normalCallsQueue.shift();
                            setNormalFile(normalCallsQueue);
                        }
                    }
                    
                    if (availableAgentIndex !== -1) {
                        setShowF3(true); 
                        setShowF2(false);
                        const updatedAgents = [...agentList];
                        updatedAgents[availableAgentIndex].is_available = false;
                        updatedAgents[availableAgentIndex].completedCalls += 1; 
                        setAgentList(updatedAgents);
            
                        setTimeout(() => {
                            const resetAgents = [...updatedAgents];
                            resetAgents[availableAgentIndex].is_available = true;
                            setAgentList(resetAgents);
                        }, call.callDuration * 1000); 
                    } else {
                        console.log("Aucun agent disponible, le call est toujours dans la file");
                    }
                }
                setShowF1(false);
                setTimeout(() => {
                    index++;  
                    processCall(); 
                    setShowF2(false);
                    setShowF3(false);
                }, 500); 
            }, 500);  
        };
    
        processCall();  
    };
    
    return (
        <>
            <Navbar/>
            <div className='p-10 w-full flex flex-col items-center'>
                <div className='w-full'> 
                    <p className='tewt-3xl text-[#2E333F] font-bold'>Paramétres de la simulation :</p>
                </div>
                <div className="w-full flex justify-between space-x-4">
                    {/* Agent Counter */}
                    <div className="w-1/3 p-4 rounded-lg flex flex-col items-center">
                        {/* Header */}
                        <div className="w-full bg-my-purple text-white p-2 rounded-t-lg">
                            <h3 className="text-lg font-bold mb-2 text-center">Agents</h3>
                        </div>

                        {/* Corps */}
                        <div className="w-full bg-gray-200 p-4 rounded-b-lg flex flex-col items-center">
                            <div className="flex items-center justify-evenly w-full">
                            <button onClick={decrementAgents} className="px-3 py-1 bg-red-500 text-white rounded">-</button>
                            <input
                                type="number"
                                value={agents}
                                onChange={handleAgentsChanges}
                                className="text-3xl text-center w-16 border bg-gray-200 border-black rounded"
                            />
                            <button onClick={incrementAgents} className="px-3 py-1 bg-green-500 text-white rounded">+</button>
                            </div>
                        </div>
                        </div>


                    {/* Call Counter */}
                    <div className="w-1/3 p-4 rounded-lg flex flex-col items-center">
                        {/* Header */}
                        <div className="w-full bg-my-purple text-white p-2 rounded-t-lg">
                            <h3 className="text-lg font-bold mb-2 text-center">Appels</h3>
                        </div>

                        {/* Corps */}
                        <div className="w-full bg-gray-200 p-4 rounded-b-lg flex flex-col items-center">
                            <div className="flex items-center justify-evenly w-full">
                            <button onClick={decrementCalls} className="px-3 py-1 bg-red-500 text-white rounded">-</button>
                            <input
                                type="number"
                                value={calls}
                                onChange={handleCallsChange}
                                className="text-3xl text-center w-16 border bg-gray-200 border-black rounded"
                            />
                            <button onClick={incrementCalls} className="px-3 py-1 bg-green-500 text-white rounded">+</button>
                            </div>
                        </div>
                        </div>
                    
                    <div className="w-1/3 p-4 rounded-lg flex flex-col items-center">
                        {/* Header */}
                        <div className="w-full bg-my-purple text-white p-2 rounded-t-lg">
                            <h3 className="text-lg font-bold mb-2 text-center">Réponses existantes</h3>
                        </div>

                        {/* Corps */}
                        <div className="w-full bg-gray-200 p-4 rounded-b-lg flex flex-col items-center">
                            <div className="flex items-center justify-evenly w-full">
                            <button onClick={decrementResponses} className="px-3 py-1 bg-red-500 text-white rounded">-</button>
                            <input
                                type="number"
                                value={responses}
                                onChange={handleResponsesChange}
                                className="text-3xl text-center w-16 border bg-gray-200 border-black rounded"
                            />
                            <button onClick={incrementResponses} className="px-3 py-1 bg-green-500 text-white rounded">+</button>
                            </div>
                        </div>
                        </div>

                </div>
                <button onClick={handleLaunch} className="mt-4 h-[90%] px-3 py-1 bg-green-500 text-white rounded">
                    <FontAwesomeIcon className='mr-2' icon={faPlay} />{}
                    Lancer
                </button>
                <div className='h-[80vh] mt-5  w-full flex flex-row '>
                <div className="relative  w-[50%] h-[80%]"> 
                    <div className='absolute top-0 left-0 w-24 h-24 flex flex-col items-center'>
                        <img src={phone} alt="Photo 1" className="" />
                        <p className='text-lg'>Appels</p>
                    </div>
                    {showF1 && <img src={f1} alt="f1" className="absolute top-24 left-24 w-32 h-auto" />}
                    <div className='absolute top-1/2  right-64 transform -translate-y-1/2 w-24 h-auto flex flex-col items-center'>
                        <img src={ai} alt="Photo 2" className="" />
                        <p className='text-lg text-center'>Répondeur intelligent</p>
                    </div>
                    {showF2 && <img src={f2} alt="f2" className="absolute top-1/2 left-24 w-32 h-auto" />}
                    <div className='absolute bottom-0 left-0 w-20 h-auto flex-col items-center'>
                        <img src={response} alt="Photo 3" className="" />
                        <p className='text-md text-center'>Réponse automatique</p>
                    </div>
                    {showF3 && <img src={f3} alt="f3" className="absolute top-1/2 right-16 transform -translate-y-1/2 w-32 h-auto" />}

                </div>
                    <div className='w-[50%] h-full bg-white rounded-lg shadow-xl p-2 flex flex-col items-center'>
                        <h2 className='text-xl font-bold mb-4 text-center'>Agents</h2>
                        <div className='grid grid-cols-3 h-[80%] gap-8'>
                        {agentList.map((agent) => (
                            <div
                                key={agent.id}
                                className={`${agent.is_available ? "bg-my-green" : "bg-red-500"}  w-32 h-32 shadow-xl text-white rounded-lg p-4 flex flex-col items-center justify-evenly`}
                            >
                                <p>Agent {agent.id}</p>
                                <p>{agent.is_available ? 'Libre' : 'Occupé'}</p>
                                <p>Réponses : {agent.completedCalls}</p> 
                            </div>
                        ))}
                    </div>
                    </div>
                </div>
               <div className='flex flex-row justify-around w-full'>
               <div className='w-1/2 p-4 bg-blue-200 rounded-lg'>
                    <h3 className='text-lg font-bold'>Appels Normaux</h3>
                    {normalFile.length === 0 ? (
                        <p>Aucun appel normal en attente.</p>
                    ) : (
                        <ul>
                            {normalFile.map((call) => (
                                <li key={call.id} className='p-2 border-b'>
                                    Appel ID: {call.id}, Durée: {call.callDuration} secondes
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className='w-1/2 p-4 bg-red-200 rounded-lg'>
                    <h3 className='text-lg font-bold'>Appels urgents</h3>
                    {urgentFile.length === 0 ? (
                        <p>Aucun appel urgent en attente.</p>
                    ) : (
                        <ul>
                            {urgentFile.map((call) => (
                                <li key={call.id} className='p-2 border-b'>
                                    Appel ID: {call.id}, Durée: {call.callDuration}secondes
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
               </div>
            </div>
        </>
    );
}

export default AppelSimulation;



// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/navbar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlay } from '@fortawesome/free-solid-svg-icons';
// import ai from '../assets/ai.png';
// import phone from '../assets/phone.png';
// import response from '../assets/response.png';
// import f1 from '../assets/f1.png';
// import f2 from '../assets/f2.png';
// import f3 from '../assets/f3.png';

// const AppelSimulation = () => {
//     const [showF1, setShowF1] = useState(false);
//     const [showF2, setShowF2] = useState(false);
//     const [showF3, setShowF3] = useState(false);
//     const [agents, setAgents] = useState(4);
//     const [agentList, setAgentList] = useState([]);
//     const [calls, setCalls] = useState(20);
//     const [responses, setResponses] = useState(5);
//     const [randomData, setRandomData] = useState([]);

//     useEffect(() => {
//         const newAgents = Array.from({ length: agents }, (_, index) => ({
//             id: index + 1,
//             is_available: true,
//             completedCalls: 0, // Nouvel attribut pour suivre le nombre de réponses
//         }));
//         setAgentList(newAgents);
//     }, [agents]);

//     const incrementAgents = () => {
//         if (agents < 9) setAgents(agents + 1);
//     };

//     const decrementAgents = () => {
//         if (agents > 1) setAgents(agents - 1);
//     };

//     const incrementCalls = () => setCalls(calls + 1);
//     const decrementCalls = () => {
//         if (calls > 0) setCalls(calls - 1);
//     };

//     const incrementResponses = () => setResponses(responses + 1);
//     const decrementResponses = () => {
//         if (responses > 0) setResponses(responses - 1);
//     };

//     const handleAgentsChanges = (e) => {
//         const value = parseInt(e.target.value, 10);
//         if (!isNaN(value)) {
//             setAgents(value);
//         }
//     };

//     const handleCallsChange = (e) => {
//         const value = parseInt(e.target.value, 10);
//         if (!isNaN(value)) {
//             setCalls(value);
//         }
//     };

//     const handleResponsesChange = (e) => {
//         const value = parseInt(e.target.value, 10);
//         if (!isNaN(value)) {
//             setResponses(value);
//         }
//     };

//     function generateRandomData(nbAppels, responses) {
//         const randomBool = () => Math.random() < 0.5;
//         const randomCallDuration = () => Math.floor(Math.random() * (6 - 3 + 1)) + 3;
//         const data = [];
//         for (let i = 0; i < responses; i++) {
//             data.push({
//                 id: i,
//                 acceptAutomaticResponse: true,
//                 isUrgent: false,
//                 callDuration: randomCallDuration(),
//             });
//         }

//         for (let i = responses; i < nbAppels; i++) {
//             data.push({
//                 id: i,
//                 acceptAutomaticResponse: false,
//                 isUrgent: randomBool(),
//                 callDuration: randomCallDuration(),
//             });
//         }

//         for (let i = data.length - 1; i > 0; i--) {
//             const j = Math.floor(Math.random() * (i + 1));
//             [data[i], data[j]] = [data[j], data[i]];
//         }

//         return data;
//     }

//     const handleLaunch = () => {
//         const data = generateRandomData(calls, responses);
//         console.log(data);
//         setRandomData(data);

//         let index = 0;

//         const processCall = () => {
//             if (index >= data.length) {
//                 return;
//             }

//             const call = data[index];
//             setShowF1(true);
//             setShowF2(false);
//             setShowF3(false);

//             setTimeout(() => {
//                 if (call.acceptAutomaticResponse) {
//                     setShowF2(true);
//                     setShowF3(false);
//                 } else {
//                     const availableAgents = agentList.filter(agent => agent.is_available);
                    
//                     // Trouver l'agent libre ayant le moins de commandes réalisées
//                     const agentWithLeastCalls = availableAgents.reduce((prev, curr) => {
//                         return prev.completedCalls < curr.completedCalls ? prev : curr;
//                     }, availableAgents[0]);

//                     if (agentWithLeastCalls) {
//                         setShowF3(true);
//                         setShowF2(false);

//                         const updatedAgents = agentList.map(agent =>
//                             agent.id === agentWithLeastCalls.id
//                                 ? { ...agent, is_available: false, completedCalls: agent.completedCalls + 1 }
//                                 : agent
//                         );
//                         setAgentList(updatedAgents);

//                         setTimeout(() => {
//                             const resetAgents = updatedAgents.map(agent =>
//                                 agent.id === agentWithLeastCalls.id
//                                     ? { ...agent, is_available: true }
//                                     : agent
//                             );
//                             setAgentList(resetAgents);
//                         }, call.callDuration * 1000);
//                     } else {
//                         console.log("Aucun agent disponible");
//                     }
//                 }
//                 setShowF1(false);
//                 setTimeout(() => {
//                     index++;
//                     processCall();
//                     setShowF2(false);
//                     setShowF3(false);
//                 }, 500);
//             }, 500);
//         };

//         processCall();
//     };

//     return (
//         <>
//             <Navbar />
//             <div className='p-10 w-full flex flex-col items-center'>
//                 {/* Paramètres de la simulation */}
//                 <div className='w-full'>
//                     <p className='tewt-3xl text-[#2E333F] font-bold'>Paramètres de la simulation :</p>
//                 </div>

//                 {/* Rest of the UI components */}

//                 <button onClick={handleLaunch} className="mt-4 px-3 py-1 bg-green-500 text-white rounded">
//                     <FontAwesomeIcon className='mr-2' icon={faPlay} />{}
//                     Lancer
//                 </button>

//                 {/* Simulation Components */}
//                 <div className='h-[80vh] mt-5  w-full flex flex-row'>
//                     <div className="relative w-[50%] h-[80%]">
//                         {/* Simulation Visuelle */}
//                         {showF1 && <img src={f1} alt="f1" className="absolute top-24 left-24 w-32 h-auto" />}
//                         {showF2 && <img src={f2} alt="f2" className="absolute top-1/2 left-24 w-32 h-auto" />}
//                         {showF3 && <img src={f3} alt="f3" className="absolute top-1/2 right-16 transform -translate-y-1/2 w-32 h-auto" />}
//                     </div>

//                     {/* Agents Section */}
//                     <div className='w-[50%] h-full bg-white rounded-lg shadow-xl p-4 flex flex-col items-center'>
//                         <h2 className='text-xl font-bold mb-4 text-center'>Agents</h2>
//                         <div className='grid grid-cols-3 h-[90%] gap-8'>
//                             {agentList.map((agent) => (
//                                 <div
//                                     key={agent.id}
//                                     className={`${agent.is_available ? "bg-my-green" : "bg-red-500"} w-32 h-32 shadow-xl text-white rounded-lg p-4 flex flex-col items-center justify-evenly`}
//                                 >
//                                     <p>Agent {agent.id}</p>
//                                     <p>{agent.is_available ? 'Libre' : 'Occupé'}</p>
//                                     <p>Réponses : {agent.completedCalls}</p> {/* Afficher le nombre de réponses */}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default AppelSimulation;
