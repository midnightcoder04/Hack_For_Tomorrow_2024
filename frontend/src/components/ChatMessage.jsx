import { useEffect, useState } from 'react';
import { Bot, User } from 'lucide-react';

export default function ChatMessage({ message }) {
  const isUser = message.type === 'user';
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (!isUser) {
      let i = 0;
      const speed = 20; // Typing speed in milliseconds
      const interval = setInterval(() => {
        if (i < message.content.length) {
          setDisplayedText((prev) => prev + message.content.charAt(i));
          i++;
        } else {
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval); // Cleanup on component unmount
    }
  }, [isUser, message.content]);

  return (
    <div className={`flex items-start gap-4 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
      {isUser ? (
        <div className="flex items-center gap-2" style={{ flexDirection: 'row' }}>
          <div
            className={`rounded-lg p-4 max-w-[80%] bg-blue-600 text-white`}
            style={{
              width: '400px',
              backgroundColor: '#2d2d2d',
              borderRadius: '20px',
              padding: '20px',
              margin: '10px',
            }}
          >
            <div dangerouslySetInnerHTML={{ __html: message.content }} />
          </div>
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-700">
            <User className="w-5 h-5 text-white" />
          </div>
        </div>
      ) : (
        <div style={{ flexDirection: 'row', marginTop: '10px', margin: '8px' }}>
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-700">
            <Bot className="w-5 h-5 text-blue-500" />
          </div>
          <div
            className={`rounded-lg p-4 max-w-[80%] bg-gray-800 text-gray-100`}
            style={{
              width: '400px',
              backgroundColor: '#2d2d2d',
              borderRadius: '20px',
              padding: '20px',
              margin: '10px',
            }}
          >
            <div dangerouslySetInnerHTML={{ __html: displayedText }} />
          </div>
        </div>
      )}
    </div>
  );
}
