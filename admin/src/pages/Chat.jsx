import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Chat = () => {
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
                    sender: 'Admin', // Specify sender as 'Admin'
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
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
            <div className="chat-container bg-white shadow-2xl rounded-lg w-full max-w-lg p-6">
                <div className="intro-section mb-6">
                    <h2 className="text-2xl font-bold text-center text-gray-700 mb-2">Welcome to Revive Phone Store!</h2>
                    <p className="text-center text-gray-600">
                        We are here to assist you with any inquiries regarding our products and services. 
                        Feel free to chat with us for immediate support!
                    </p>
                </div>

                <h2 className="text-xl font-bold text-center text-gray-700 mb-4">Admin Chat</h2>
                <div className="messages flex flex-col space-y-4 overflow-y-auto mb-4 h-80 bg-gray-100 p-4 rounded-lg">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`flex items-start ${
                                msg.sender === 'Admin' ? 'justify-end' : 'justify-start'
                            }`}
                        >
                            <div
                                className={`p-3 max-w-xs rounded-lg shadow ${
                                    msg.sender === 'Admin'
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-green-300 text-gray-800'
                                }`}
                            >
                                <p className="text-sm font-semibold mb-1">
                                    {msg.sender === 'Admin' ? 'You' : 'User'}
                                </p>
                                <p>{msg.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <form onSubmit={sendMessage} className="flex space-x-2">
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Type a message..."
                        className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-600 transition duration-200"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Chat;
