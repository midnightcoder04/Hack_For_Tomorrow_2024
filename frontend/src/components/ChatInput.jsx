import { Send } from 'lucide-react';

export default function ChatInput({ input, setInput, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="border-t border-gray-800 bg-gray-900 p-6">
      <div className="max-w-5xl mx-auto flex items-center w-full bg-gray-800 rounded-full px-6 py-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask and clear your legal doubts..."
          className="flex-1 bg-gray-800 text-white rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
          style={{
            width: '400%',
            minHeight: '80px',
            backgroundColor: '#2d2d2d',
            color:'white', 
            borderRadius: '15px',
            border:0,
            textAlign:'center'
          }}
        />
        <button
          type="submit"
          className="ml-4 bg-blue-700 hover:bg-blue-800 text-white rounded-full px-8 py-3 flex items-center gap-1 transition-colors"
          style={{ height: '45px',display:'flex',flexDirection:'row',gap:2,marginTop:'10px'}}
        >
          <Send className="w-4 h-4" style={{height:'16px',width:'16px'}} />
          Send
        </button>
      </div>
    </form>
  );
}
