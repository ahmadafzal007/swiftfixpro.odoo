import { useRef, useState, useEffect } from "react";
import { useChat } from "../hooks/useChat.jsx"; // Update the path accordingly
import { FaUser, FaRobot } from "react-icons/fa"; // Import icons

export const UI = ({ hidden, ...props }) => {
  const input = useRef();
  const messagesEndRef = useRef(null);
  const { chatWithoutAudio, message, loading } = useChat();
  const [messages, setMessages] = useState([{ text: "Hi! How can I assist you?", isUser: false }]);

  const sendMessage = async (message) => {
    if (message.trim()) {
      // Add user message
      setMessages((prevMessages) => [...prevMessages, { text: message, isUser: true }]);
      
      // Clear input field
      input.current.value = '';

      // Get response from chatWithoutAudio
      await chatWithoutAudio(message);
    }
  };

  useEffect(() => {
    // Scroll to bottom when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (message) {
      // Add response message
      setMessages((prevMessages) => [...prevMessages, { text: message.text, isUser: false }]);
    }
  }, [message]);

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 bottom-0 z-10 flex flex-col p-4"
        style={{
          background: "#ffffff" // Set background to white
        }}
      >
        <div className="flex-grow flex flex-col lg:mx-40 justify-center items-center p-4">
          <div
            className="w-full h-[800px]  flex flex-col bg-white rounded-lg p-4 overflow-y-auto scrollbar-custom border border-[#c3582a]" // Set background to white and border to dark orange
            style={{ maxHeight: 'calc(100vh - 200px)' }} // Adjust this value as needed
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start mb-4 ${msg.isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!msg.isUser && (
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#f77035] mr-4"> {/* Set bot icon background to light orange */}
                    <FaRobot className="text-white" />
                  </div>
                )}
                <div
                  className={`p-4 rounded-lg border ${msg.isUser ? 'bg-[#f77035] text-white border-[#c3582a]' : 'bg-white text-[#c3582a] border-[#f77035]'}`} // Set user message background to light orange and bot message background to white with dark orange text
                  style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
                >
                  {msg.text}
                </div>
                {msg.isUser && (
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#c3582a] ml-4"> {/* Set user icon background to dark orange */}
                    <FaUser className="text-white" />
                  </div>
                )}
              </div>
            ))}
            {/* Ref for scrolling */}
            <div ref={messagesEndRef} />
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 mt-4">
          <input
            className="w-[500px] p-4 rounded-md bg-white text-[#c3582a] placeholder-[#f77035] border border-[#c3582a] focus:border-[#f77035] focus:outline-none" // Set input background to white with dark orange text and placeholder
            placeholder="Type a message..."
            ref={input}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage(input.current.value);
              }
            }}
          />
          <button
            onClick={() => sendMessage(input.current.value)}
            className="bg-[#f77035] hover:bg-[#c3582a] text-white p-4 px-5 font-semibold uppercase rounded-md border border-[#c3582a] hover:border-[#f77035]" // Set button background to light orange with dark orange border
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};
