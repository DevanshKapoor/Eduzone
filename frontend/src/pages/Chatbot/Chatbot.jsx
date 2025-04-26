import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { FaRobot } from "react-icons/fa6";
import TimeNow from './time';
import {Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";


const Chatbot = () => {
  const [messages, setMessages] = useState([
    { role: 'model', text: 'Hello, I\'m EduBot. Ask me your college admission and selection questions.' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Initialize Gemini AI
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ 
    model: "gemini-1.5-flash",
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  // Start chat session with initial context
  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [{ text: "You are EduBot, a chatbot for EduZone website. You help people with their college admission and doubts regarding which college to choose. Keep all your responses short and crisp. Do not links to ther wesites. Give names of suitable Engineering college of india when some asks about which college to go baed on their criteria instead of givin broad answers." }],
      },
      {
        role: "model", 
        parts: [{ text: "Hello, I'm EduBot. Ask me your college admission and selection questions." }],
      },
    ],
  });

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Add user message to chat
    const userMessage = { role: 'user', text: inputMessage };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Send message to Gemini
      const result = await chatSession.sendMessage(inputMessage);
      const botResponse = { role: 'model', text: result.response.text().replace(/[*\/]/g, "").trim() };
      
      // Update messages with bot response
      setMessages(prevMessages => [...prevMessages, botResponse]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = { 
        role: 'model', 
        text: 'Sorry, I\'m having trouble processing your request right now.' 
      };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-[100vh] mx-auto bg-white rounded-lg shadow-md">
      
    <div className='flex gap-2 text-2xl md:text-3xl md:p-4 bg-blue-700 text-white justify-center items-center p-2'>
        <Link to="/features">
        <button className="fixed top-4 left-3  p-3 rounded-full bg-black text-sm"><FaArrowLeft /></button>
      </Link> 
        <FaRobot />
        <div>EduBot</div>
    </div>

      <div className="h-[80vh] overflow-y-auto mb-4 p-2 border rounded">
        {messages.map((msg, index) => (
          <div 
            key={index} 
            className={`mb-2 p-2 rounded-lg mx-2 px-4 ${
              msg.role === 'user' 
                ? 'bg-blue-100 text-right ' 
                : 'bg-slate-200 text-left '
            }`}
          >
            {msg.text}
            <br />
            <TimeNow />
          </div>
        ))}
        {isLoading && (
          <div className="text-center text-gray-500 italic">
            EduBot is typing...
          </div>
        )}
      </div>
      <div className="flex">
        <input 
          type="text" 
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Ask about college admissions"
          className="flex-grow p-2 border rounded-l"
        />
        <button 
          onClick={sendMessage}
          disabled={isLoading}
          className="bg-blue-500 text-white p-2 rounded-r disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;