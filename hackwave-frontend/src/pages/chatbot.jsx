// Chatbot.jsx

import React, { useState } from 'react';
import Navbar from '../components/navbar';
import axios from 'axios';
const Chatbot = () => {
  const [messages, setMessages] = useState([{ text: "Bonjour! c'est un plaisir de vous rencontrer", sender: 'bot' },{ text: "Qu'est-ce qui vous amène ici aujourd'hui ? Veuillez utiliser la navigation ci-dessous pour me poser des questions concernant votre probléme!" }]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      axios.post('http://localhost:8000/chatbot/',  { headers: {
        'Content-Type': 'application/json'
      }, question: input }, )
        .then((response) => {
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: response.data.message, sender: 'bot' },
              ]);
        })
        .catch((error) => {
          console.log(error);
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: "Une erreur s'est produite", sender: 'bot' },
          ]);
        });
    }
  };

  return (
    <>
    <Navbar />
    <div className='h-screen w-full flex justify-center items-center'>
      <div className="flex flex-col h-[90%] bg-white w-[90%]">
        {/* En-tête */}
        <div className="text-black p-4 border-b-2 flex flex-row items-center">
          <div className='h-10 w-10 bg-[#4D44B5] rounded-full'></div>
          <div className='ml-4'>
            <p className='x'>Chatbot</p>
            <div className='flex flex-row items-center text-sm'>
              <div className='h-4 w-4 bg-green-600 rounded-full'></div>
              <p className='ml-2'>Online</p>
            </div>
          </div>
        </div>

        {/* Espace scrollable pour les messages */}
        <div className="flex-grow overflow-y-auto p-4 bg-white">
          {messages.map((msg, index) => (
            <div
            key={index}
            className={`my-2 p-2 w-fit max-w-[50%] rounded-xl py-2 px-4 ${
              msg.sender === 'user'
                ? 'bg-my-purple text-white self-start ml-auto' 
                : 'bg-gray-300 text-black self-start' 
            }`}
            style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }} 
          >
            {msg.text}
          </div>
          ))}
        </div>

        {/* Espace fixe pour l'input */}
        <div className="bg-white p-4 border-t flex items-center">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                className="border rounded-xl w-full p-2 mr-2"                 placeholder="Posez votre question..."
            />
            <button
                onClick={handleSend}
                className="bg-my-purple text-white rounded px-4 py-2" 
            >
                Envoyer
            </button>
            </div>

      </div>
    </div>
    </>
  );
};

export default Chatbot;
