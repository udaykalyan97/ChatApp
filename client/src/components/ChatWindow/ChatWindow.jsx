import ChatMessage from './ChatMessage';
import MessageInput from './MessageInput';

const ChatWindow = ({selectedUser}) => {
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });


    return (
        <div className="w-full h-screen flex flex-col border border-black">
            <div className="p-4 bg-white shadow-md flex">
                <img
                    src={selectedUser.avatar}
                    alt="Avatar"
                    className="w-6 h-6 rounded-full mr-3 md:w-12 md:h-12"
                />
                <div className='flex flex-col'>
                <h2 className="text-xl font-bold ">{selectedUser.name}</h2>
                <p className='text-xs'>Last seen on {selectedUser.lastSeen || timestamp}</p>
                </div>
                
            </div>
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                {selectedUser.messages.map((msg) => (
                    <ChatMessage key={msg.id} msg={msg} avatar={selectedUser.avatar} />
                ))}
            </div>
            <MessageInput />
        </div>
    );
};

export default ChatWindow;
