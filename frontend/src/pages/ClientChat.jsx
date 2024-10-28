import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClientChat = () => {
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('');

    // Fetch messages when the component mounts
    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/chat');
                setMessages(response.data);
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        };

        fetchMessages();
    }, []);

    // Send a message
    const sendMessage = async (e) => {
        e.preventDefault();
        if (text.trim()) {
            try {
                const response = await axios.post('http://localhost:4000/api/chat/send', {
                    sender: 'User', // Specify sender as 'User'
                    text: text,
                });
                setMessages([...messages, response.data]);
                setText('');
            } catch (error) {
                console.error('Error sending message:', error);
            }
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-light-100">
                {/* Introduction Section with 100% width */}
                <div className="intro-section w-full bg-white border border-gray-300 rounded-lg shadow-lg p-5 mb-6">
                <h2 className="text-2xl font-semibold text-center mb-4">Welcome to Revive Phone Store!</h2>
                <p className="text-gray-600 text-center mb-4">
                    We are here to help you with any inquiries about our products and services. 
                    Chat with us for immediate support!
                </p>
                <div className="image-container flex justify-center mb-4">
                    <img style={{width:'400px'}}
                        src="https://media.wired.com/photos/66df337dfb7d4953b6dc5f31/master/w_2560%2Cc_limit/Screenshot%25202024-09-09%2520at%252010.42.09%25E2%2580%25AFAM.png" // Replace with your image URL
                        alt="Revive Phone Store"
                        className="rounded-lg max-w-full h-auto m-5"  // Ensures the image is responsive
                    />
                    <img style={{width:'400px'}}
                        src="https://img.freepik.com/premium-photo/phone-tripod-shoots-fireb_160152-5854.jpg" // Replace with your image URL
                        alt="Revive Phone Store"
                        className="rounded-lg max-w-full h-auto m-5" // Ensures the image is responsive
                    />
                    <img style={{width:'400px'}}
                        src="https://images.squarespace-cdn.com/content/v1/5824673c2e69cfc8ac1e3cd3/1580377764933-1L0AVRF4MU86B18J3S4A/Picture+of+woodlands+taken+on+iphone+using+natural+light" // Replace with your image URL
                        alt="Revive Phone Store"
                        className="rounded-lg max-w-full h-auto m-5" // Ensures the image is responsive
                    />
                </div>
                <p className="text-gray-600 text-center">
                    At Revive Phone Store, we specialize in phone repairs, accessories, and more. 
                    Your satisfaction is our top priority!
                </p>
            </div>
            <div className="chat-box w-full max-w-md bg-white border border-gray-300 rounded-lg shadow-lg p-5">
                <h2 className="text-xl font-semibold text-center mb-4">User Chat</h2>
                <div className="messages-box overflow-y-auto h-64 bg-gray-50 rounded-lg p-4 mb-4 shadow-inner">
                    {messages.map((msg, index) => (
                        <div 
                            key={index} 
                            className={`message p-2 mb-2 rounded-lg ${msg.sender === 'User' ? 'bg-green-200 self-end' : 'bg-orange-300 self-start'}`}
                        >
                            <strong>{msg.sender === 'User' ? 'You' : 'Admin'}:</strong> {msg.text}
                        </div>
                    ))}
                </div>
                <form onSubmit={sendMessage} className="flex">
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-1 border border-gray-300 rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button 
                        type="submit" 
                        className="bg-blue-500 text-white rounded-r-lg p-2 hover:bg-blue-600 transition duration-200"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ClientChat;
