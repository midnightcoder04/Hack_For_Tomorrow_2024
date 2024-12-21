import { Bot } from 'lucide-react';

export default function WelcomeMessage() {
  return (
    <div className="text-center text-gray-400">
      <Bot className="w-16 h-16 mx-auto mb-4 text-blue-500" />
      <p className="text-xl">How can I assist you with legal matters today?</p>
    </div>
  );
}