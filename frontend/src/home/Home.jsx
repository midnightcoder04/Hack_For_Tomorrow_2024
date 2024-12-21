// Home.jsx
import { useState } from 'react';
import Header from '../components/Header';
import ChatMessage from '../components/ChatMessage';
import ChatInput from '../components/ChatInput';
import LangflowClient from '../../utils/langFlowClient';
import WelcomeMessage from '../components/WelcomeMessage';

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const applicationToken = import.meta.env.VITE_APP_TOKEN;

  const langflowClient = new LangflowClient(
    '/api', // Use the proxy path
    applicationToken
  );

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    setLoading(true);

    const userMessage = { type: 'user', content: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]); // Display user input immediately

    try {
      const response = await langflowClient.runFlow(
        '36694925-0da8-455b-a42e-3dbed018c370', // Flow ID
        '4a9a63dd-f5fc-4541-ba7c-47f5b5de32fe', // Langflow ID
        input,
        'chat', // Input type
        'chat', // Output type
        {}, // Tweaks
        false, // Stream
        (data) => console.log("Update:", data), // onUpdate
        (message) => console.log("Closed:", message), // onClose
        (error) => console.error("Error:", error) // onError
      );

      if (response && response.outputs) {
        const flowOutputs = response.outputs[0];
        const firstComponentOutputs = flowOutputs.outputs[0];
        const output = firstComponentOutputs.outputs.message;

        const botMessage = { type: 'ai', content: output.message.text };
        setMessages((prevMessages) => [...prevMessages, botMessage]); // Append AI response
      }
    } catch (error) {
      console.error('Error sending message:', error.message);
      const errorMessage = { type: 'ai', content: 'An error occurred while processing your message.' };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setLoading(false);
      setInput('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSendMessage();
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      <Header />

      <div className="flex-1 overflow-auto p-6">
        <div className="max-w-3xl mx-auto space-y-6">
          {messages.length === 0 ? (
            <WelcomeMessage />
          ) : (
            messages.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))
          )}
        </div>
      </div>

      <ChatInput 
        input={input}
        setInput={setInput}
        onSubmit={handleSubmit}
      />
    </div>
  );
}