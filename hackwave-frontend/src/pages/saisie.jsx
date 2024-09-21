// import React, { useState } from 'react';
// import Navbar from '../components/navbar';
// import { FaMicrophone } from 'react-icons/fa';
// import { PiPersonSimpleRunThin } from 'react-icons/pi';

// const SaisieTest = () => {
//     // State for form data
//     const [formData, setFormData] = useState({
//         nom: '',
//         prenom: '',
//         telephone: '',
//         banque: '',
//         profile: '',
//         raison: '',
//         date: new Date().toISOString().split('T')[0], // Today's date
//         heure: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }), // Current time
//     });

//     const [input, setInput] = useState('');
//     const handleClick = (value) => {
//         setInput(input + value);
//         console.log(value);
//     };
//     const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"];

//     let ws;
//     let recognition;

//     // Function to start voice recognition
//     function startRecognition() {
//         if ('webkitSpeechRecognition' in window) {
//             recognition = new webkitSpeechRecognition();
//             recognition.continuous = true;
//             recognition.interimResults = false;
//             recognition.lang = 'fr-FR';

//             recognition.onresult = (event) => {
//                 let transcript = event.results[event.resultIndex][0].transcript;
//                 window.speechSynthesis.cancel();
//                 console.log(transcript);
//                 ws.send(transcript);
//             };

//             recognition.onend = () => {
//                 recognition.start();
//             };

//             recognition.start();
//         } else {
//             console.log('Your browser does not support Web Speech API.');
//         }
//     }

//     // Function to speak text
//     function speakText(text) {
//         let speech = new SpeechSynthesisUtterance(text);
//         speech.lang = 'fr-FR';
//         window.speechSynthesis.speak(speech);
//     }

//     // Handle WebSocket communication and update form data based on received data
//     const handleVoiceRecord = () => {
//         ws = new WebSocket('ws://127.0.0.1:8000/ws/recognize/');
//         ws.onopen = () => {
//             startRecognition();
//         };
//         ws.onmessage = (event) => {
//             try {
//                 const data = JSON.parse(event.data);

//                 // Update form data based on received WebSocket data
//                 setFormData((prevData) => ({
//                     ...prevData,
//                     nom: data.nom || prevData.nom,
//                     prenom: data.prenom || prevData.prenom,
//                     telephone: data.numero_tel || prevData.numero_tel,
//                     banque: data.banque || prevData.banque,
//                     raison: data.raison || prevData.raison,
//                     date: new Date().toISOString().split('T')[0],
//                     heure: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
//                 }));

//                 ws.close();
//             } catch (e) {
//                 console.log("pas un json");
//                 speakText(event.data);
//             }
//         };

//         ws.onerror = (event) => {
//             console.error('WebSocket error:', event);
//         };

//         ws.onclose = () => {
//             recognition.stop();
//         };
//     };

//     return (
//         <>
//             <Navbar />
//             <div className="h-[88vh] w-full flex justify-center items-center">
//                 <div className='h-[93%] w-full flex flex-col justify-between items-center'>
//                     <div className='h-[5%] w-[60%] flex justify-between items-center'>
//                         <p className='text-lg font-bold text-my-purple'>Nouvel Appel</p>
//                         <button
//                             onClick={handleVoiceRecord}
//                             className="flex items-center bg-my-purple text-white rounded py-2 px-2 ml-2"
//                         >
//                             <FaMicrophone className="mr-2" /> Voice Record
//                         </button>
//                     </div>
//                     <div className='w-full flex flex-row items-center justify-around'>
//                         <div className='mt-8 w-[60%] mb-8 bg-white rounded p-4'>
//                             <form>
//                                 <div className='flex mb-4 items-center'>
//                                     <label htmlFor='nom' className='block text-sm font-medium text-gray-700 w-1/3'>Nom</label>
//                                     <input
//                                         type='text'
//                                         id='nom'
//                                         value={formData.nom}
//                                         onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
//                                         className='mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm p-2'
//                                         required
//                                     />
//                                 </div>

//                                 <div className='flex mb-4 items-center'>
//                                     <label htmlFor='prenom' className='block text-sm font-medium text-gray-700 w-1/3'>Prénom</label>
//                                     <input
//                                         type='text'
//                                         id='prenom'
//                                         value={formData.prenom}
//                                         onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
//                                         className='mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm p-2'
//                                         required
//                                     />
//                                 </div>

//                                 <div className='flex mb-4 items-center'>
//                                     <label htmlFor='telephone' className='block text-sm font-medium text-gray-700 w-1/3'>Numéro de téléphone</label>
//                                     <input
//                                         type='tel'
//                                         id='telephone'
//                                         value={formData.telephone}
//                                         onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
//                                         className='mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm p-2'
//                                         required
//                                     />
//                                 </div>

//                                 <div className='flex mb-4 items-center'>
//                                     <label htmlFor='banque' className='block text-sm font-medium text-gray-700 w-1/3'>Banque</label>
//                                     <input
//                                         type='text'
//                                         id='banque'
//                                         value={formData.banque}
//                                         onChange={(e) => setFormData({ ...formData, banque: e.target.value })}
//                                         className='mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm p-2'
//                                         required
//                                     />
//                                 </div>

//                                 <div className='flex mb-4 items-center'>
//                                     <label htmlFor='raison' className='block text-sm font-medium text-gray-700 w-1/3'>Raison d'appel</label>
//                                     <input
//                                         type='text'
//                                         id='raison'
//                                         value={formData.raison}
//                                         onChange={(e) => setFormData({ ...formData, raison: e.target.value })}
//                                         className='mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm p-2'
//                                         required
//                                     />
//                                 </div>

//                                 <div className='flex mb-4 items-center'>
//                                     <label htmlFor='date' className='block text-sm font-medium text-gray-700 w-1/3'>Date d'appel</label>
//                                     <input
//                                         type='date'
//                                         id='date'
//                                         value={formData.date}
//                                         onChange={(e) => setFormData({ ...formData, date: e.target.value })}
//                                         className='mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm p-2'
//                                         required
//                                     />
//                                 </div>

//                                 <div className='flex mb-4 items-center'>
//                                     <label htmlFor='heure' className='block text-sm font-medium text-gray-700 w-1/3'>Heure d'appel</label>
//                                     <input
//                                         type='time'
//                                         id='heure'
//                                         value={formData.heure}
//                                         onChange={(e) => setFormData({ ...formData, heure: e.target.value })}
//                                         className='mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm p-2'
//                                         required
//                                     />
//                                 </div>

//                                 <button type='submit' className='mt-4 bg-my-purple text-white rounded-md px-4 py-2'>
//                                     Soumettre
//                                 </button>
//                             </form>
//                         </div>
//                         <div className='h-'>
//                             <input
//                                 type='text'
//                                 value={input}
//                                 className='w-full h-10 text-2xl text-center'
//                                 readOnly
//                             />

//                             <div className='w-[100%] h-[100%] grid grid-cols-3 gap-5 p-8'>
//                                 {numbers.map((number) => (
//                                     <button
//                                         key={number}
//                                         className='bg-gray-200 text-lg font-bold rounded w-[4rem] h-[4rem] flex items-center justify-center'
//                                         onClick={() => handleClick(number)}
//                                     >
//                                         {number}
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                     <div className='h-[10%] w-full flex justify-center items-center'>
//                         <button className='h-[3rem] w-[3rem] flex justify-center items-center text-3xl rounded-full bg-my-purple text-white'>
//                             <PiPersonSimpleRunThin />
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default SaisieTest;

import React, { useState } from 'react';
import Navbar from '../components/navbar';
import { FaMicrophone } from 'react-icons/fa';
import { PiPersonSimpleRunThin } from 'react-icons/pi';
import axios from 'axios';

const SaisieTest = () => {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        telephone: '',
        banque: '',
        profile: '',
        raison: '',
        date: '', // Empty until name and surname are received
        heure: '', // Empty until name and surname are received
    });

    const [input, setInput] = useState('');

    const handleClick = (value) => {
        setInput(input + value);
        if(input.length==0){
            console.log(typeof(value));
            switch(value){
                case 1:
                    setFormData({ ...formData, profile: "Porteur de carte" }); 
                    break;
                case 2:
                    setFormData({ ...formData, profile: "Banque" }); 
                    break;
                case 3:
                    setFormData({ ...formData, profile: "Commerçant" }); 
                    break;
                case 4:
                    setFormData({ ...formData, profile: "Autre" }); 
                    break;
            }
            axios.post('http://127.0.0.1:8000/speachRecon/first', {choice: parseInt(value)})
            .then(res => {
                console.log(res.data);
                speakText(res.data.message);
            })
        }
        else if (input.length==1){
            console.log(typeof(value));
            switch(value){
                case 1:
                    setFormData({ ...formData, typeTraitement: "Ordinaire" }); 
                    break;
                case 2:
                    setFormData({ ...formData, typeTraitement: "Urgent" }); 
                    break;
            }
            axios.post('http://127.0.0.1:8000/speachRecon/second', {choice: parseInt(value)})
            .then(res => {
                console.log(res.data);
                speakText(res.data.message);
            })
        }else if (input.length==2){
            console.log(typeof(value));
            switch(value){
                case 1:
                    setFormData({ ...formData, t_demande: "DAB" }); 
                    break;
                case 2:
                    setFormData({ ...formData, t_demande: "Paiement en ligne" }); 
                    break; 
                case 3:
                    setFormData({ ...formData, t_demande: "TPE" }); 
                    break;
            }
            axios.post('http://127.0.0.1:8000/speachRecon/third', {choice: parseInt(value)})
            .then(res => {
                console.log(res.data);
                speakText(res.data.message);
            })
        }else {
            axios.post('http://127.0.0.1:8000/speachRecon/forth', {choice: parseInt(value)})
            .then(res => {
                console.log(res.data);
                speakText(res.data.message);
            })
        }
        
    };

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"];

    let ws;
    let recognition;

    // Function to start voice recognition
    function startRecognition() {
        if ('webkitSpeechRecognition' in window) {
            recognition = new webkitSpeechRecognition();
            recognition.continuous = true;
            recognition.interimResults = false;
            recognition.lang = 'fr-FR';

            recognition.onresult = (event) => {
                let transcript = event.results[event.resultIndex][0].transcript;
                window.speechSynthesis.cancel();
                console.log(transcript);
                ws.send(transcript);
            };

            recognition.onend = () => {
                recognition.start();
            };

            recognition.start();
        } else {
            console.log('Your browser does not support Web Speech API.');
        }
    }

    // Function to capitalize first letter
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };

    // Function to remove spaces from phone number
    const formatPhoneNumber = (number) => {
        return number.replace(/\s/g, '');
    };

    // Function to speak text
    function speakText(text) {
        let speech = new SpeechSynthesisUtterance(text);
        speech.lang = 'fr-FR';
        window.speechSynthesis.speak(speech);
    }

    // Handle WebSocket communication and update form data based on received data
    const handleVoiceRecord = () => {
        ws = new WebSocket('ws://127.0.0.1:8000/ws/recognize/');
        ws.onopen = () => {
            startRecognition();
        };
        ws.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);

                if (data.nom && data.prenom) {
                    setFormData((prevData) => ({
                        ...prevData,
                        nom: capitalizeFirstLetter(data.nom),
                        prenom: capitalizeFirstLetter(data.prenom),
                        date: new Date().toISOString().split('T')[0], // Set current date
                        heure: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }) // Set current time
                    }));
                }

                setFormData((prevData) => ({
                    ...prevData,
                    telephone: data.numero_tel ? formatPhoneNumber(data.numero_tel) : prevData.telephone,
                    banque: data.banque ? data.banque.toUpperCase() : prevData.banque,
                    raison: data.raison || prevData.raison,
                    date: new Date().toISOString().split('T')[0], // Set current date
                    heure: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
                }));

                // ws.close();
            } catch (e) {
                console.log("pas un json");
                speakText(event.data);
            }
        };

        ws.onerror = (event) => {
            console.error('WebSocket error:', event);
        };

        ws.onclose = () => {
            recognition.stop();
        };
    };

    return (
        <>
            <Navbar />
            <div className="h-[88vh] w-full flex justify-center items-center">
                <div className='h-[93%] w-full flex flex-col justify-between items-center'>
                    <div className='h-[5%] w-[60%] flex justify-between items-center'>
                        <p className='text-lg font-bold text-my-purple'>Nouvel Appel</p>
                        <button
                            onClick={handleVoiceRecord}
                            className="flex items-center bg-my-purple text-white rounded py-2 px-2 ml-2"
                        >
                            <FaMicrophone className="mr-2" /> Voice Record
                        </button>
                    </div>
                    <div className='w-full flex flex-row items-center justify-around'>
                        <div className='mt-8 w-[60%] mb-8 bg-white rounded p-4'>
                            <form>
                                <div className='flex mb-4 items-center'>
                                    <label htmlFor='nom' className='block text-sm font-medium text-gray-700 w-1/3'>Nom</label>
                                    <input
                                        type='text'
                                        id='nom'
                                        value={formData.nom}
                                        onChange={(e) => setFormData({ ...formData, nom: capitalizeFirstLetter(e.target.value) })}
                                        className='mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm p-2'
                                        required
                                    />
                                </div>

                                <div className='flex mb-4 items-center'>
                                    <label htmlFor='prenom' className='block text-sm font-medium text-gray-700 w-1/3'>Prénom</label>
                                    <input
                                        type='text'
                                        id='prenom'
                                        value={formData.prenom}
                                        onChange={(e) => setFormData({ ...formData, prenom: capitalizeFirstLetter(e.target.value) })}
                                        className='mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm p-2'
                                        required
                                    />
                                </div>

                                <div className='flex mb-4 items-center'>
                                    <label htmlFor='telephone' className='block text-sm font-medium text-gray-700 w-1/3'>Numéro de téléphone</label>
                                    <input
                                        type='tel'
                                        id='telephone'
                                        value={formData.telephone}
                                        onChange={(e) => setFormData({ ...formData, telephone: formatPhoneNumber(e.target.value) })}
                                        className='mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm p-2'
                                        required
                                    />
                                </div>

                                <div className='flex mb-4 items-center'>
                                    <label htmlFor='banque' className='block text-sm font-medium text-gray-700 w-1/3'>Banque</label>
                                    <input
                                        type='text'
                                        id='banque'
                                        value={formData.banque}
                                        onChange={(e) => setFormData({ ...formData, banque: e.target.value.toUpperCase() })}
                                        className='mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm p-2'
                                        required
                                    />
                                </div>

                                {/* Date and Time display */}
                                <div className='flex mb-4 items-center'>
                                    <label htmlFor='date' className='block text-sm font-medium text-gray-700 w-1/3'>Date</label>
                                    <input
                                        type='text'
                                        id='date'
                                        value={formData.date}
                                        readOnly
                                        className='mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm p-2'
                                    />
                                </div>

                                <div className='flex mb-4 items-center'>
                                    <label htmlFor='heure' className='block text-sm font-medium text-gray-700 w-1/3'>Heure</label>
                                    <input
                                        type='text'
                                        id='heure'
                                        value={formData.heure}
                                        readOnly
                                        className='mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm p-2'
                                    />
                                </div>

                                <div className='flex mb-4 items-center'>
                                    <label htmlFor='profile' className='block text-sm font-medium text-gray-700 w-1/3'>profile</label>
                                    <input
                                        type='text'
                                        id='profile'
                                        value={formData.profile}
                                        readOnly
                                        className='mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm p-2'
                                    />  
                                </div>

                                <div className='flex mb-4 items-center'>
                                    <label htmlFor='typeTraitement' className='block text-sm font-medium text-gray-700 w-1/3'>Type de traitement</label>
                                    <input
                                        type='text'
                                        id='typeTraitement'
                                        value={formData.typeTraitement}
                                        readOnly
                                        className='mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm p-2'
                                    />  
                                </div>
                                <div className='flex mb-4 items-center'>
                                    <label htmlFor='t_demande' className='block text-sm font-medium text-gray-700 w-1/3'>Type demande</label>
                                    <input
                                        type='text'
                                        id='t_demande'
                                        value={formData.t_demande}
                                        readOnly
                                        className='mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm p-2'
                                    />  
                                </div>

                                <button type='submit' className='mt-4 bg-my-purple text-white rounded-md px-4 py-2'>
                                    Soumettre
                                </button>
                            </form>
                        </div>
                        <div className='h-'>
                            <input
                                type='text'
                                value={input}
                                className='w-full h-10 text-2xl text-center'
                                readOnly
                            />

                            <div className='w-[100%] h-[100%] grid grid-cols-3 gap-5 p-8'>
                                {numbers.map((number) => (
                                    <button
                                        key={number}
                                        onClick={() => handleClick(number)}
                                        className="bg-gray-300 text-xl py-2 px-2 rounded-full"
                                    >
                                        {number}
                                    </button>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SaisieTest;

