import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, X } from 'lucide-react';
import './Chatbot.css';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: '1',
      text: "Hello! I'm your AI assistant. How can I help you today?",
      sender: 'bot',
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const API_URL = 'http://localhost:5000/chat';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const navigateToRoute = (route) => {
    // This function would handle navigation in your application
    console.log(`Navigation requested to: ${route}`);
    window.location.href = route; // Uncomment this if you want actual navigation
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage.text }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      
      const botResponse = {
        id: (Date.now() + 1).toString(),
        text: data.reply,
        sender: 'bot',
      };
      
      setMessages((prev) => [...prev, botResponse]);
      
      // If there's a route specified in the response, handle navigation
      if (data.route) {
        navigateToRoute(data.route);
      }
    } catch (error) {
      console.error('Error fetching bot response:', error);
      
      const errorResponse = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I couldn't connect to the server. Please try again later.",
        sender: 'bot',
      };
      
      setMessages((prev) => [...prev, errorResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="chat-container" style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className="chat-toggle-button">
          <img src="https://png.pngtree.com/png-clipart/20230401/original/pngtree-smart-chatbot-cartoon-clipart-png-image_9015126.png" alt="Chat" className="chat-icon" style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
        </button>
      )}

      {isOpen && (
        <div className="chat-box">
          <div className="chat-header" style={{ padding: '10px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className="chat-header-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Bot className="icon" style={{ width: '20px', height: '20px' }} />
              <div>
                <h1 style={{ fontSize: '16px', margin: 0 }}>Business Assistant</h1>
                <p style={{ fontSize: '12px', margin: 0, color: '#ccc' }}>Here to help your business grow</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="close-button">
              <X className="icon" style={{ width: '20px', height: '20px' }} />
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.sender}`}>
                <div className={`avatar ${message.sender}`}>
                  {message.sender === 'user' ? <User className="icon" /> : <Bot className="icon" />}
                </div>
                <div className={`message-content ${message.sender}`}>
                  <p>{message.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="message bot">
                <div className="avatar bot">
                  <Bot className="icon" />
                </div>
                <div className="message-content bot">
                  <Loader2 className="icon spinning" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="chat-input-form">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask about business help, schemes, or type 'show schemes'..."
              className="chat-input"
            />
            <button type="submit" className="send-button" disabled={!inputMessage.trim()}>
              <Send className="icon" />
              <span>Send</span>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
