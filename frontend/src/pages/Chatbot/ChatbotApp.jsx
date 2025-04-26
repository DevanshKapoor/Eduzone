import React, { useState } from "react";
import axios from "axios";

const ChatApp = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you?", sender: "bot" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (newMessage.trim() === "") return;

    // Add user's message to the chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: prevMessages.length + 1, text: newMessage, sender: "user" },
    ]);

    // Clear the input field
    setNewMessage("");

    // Show loading indicator
    setLoading(true);

    try {
      // Make API call
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBqnCQ4uZoCHZ8k_aQ78x7CfeSXpwG6yIk",
        {
          prompt: { text: newMessage },
        }
      );

      // Extract the bot's response
      const botResponse = response.data?.candidates?.[0]?.content?.parts?.[0]?.text?.replace(/[*\/]/g, "")
        .trim();

      // Add bot's response to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: prevMessages.length + 1, text: botResponse || "I didn't understand that.", sender: "bot" },
      ]);
    } catch (error) {
      console.error("Error generating response:", error);

      // Add error message to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: prevMessages.length + 1, text: "Error generating response. Please try again.", sender: "bot" },
      ]);
    } finally {
      // Hide loading indicator
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Chat Header */}
      <div className="bg-blue-500 text-white p-4 text-lg font-bold flex items-center justify-center">
        Chat with EduZone Bot
      </div>

      {/* Message History */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex mb-3 ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs p-3 rounded-lg text-white ${
                msg.sender === "user" ? "bg-blue-500" : "bg-gray-500"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="max-w-xs p-3 rounded-lg bg-gray-500 text-white">
              Typing...
            </div>
          </div>
        )}
      </div>

      {/* Input Field */}
      <div className="p-4 bg-white flex items-center border-t">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 border rounded-lg p-2 mr-2"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !loading) sendMessage();
          }}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={sendMessage}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default ChatApp;
