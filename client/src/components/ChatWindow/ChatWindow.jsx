import ChatMessage from './ChatMessage';
import MessageInput from './MessageInput';

const ChatWindow = () => {
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <div className="w-full h-screen flex flex-col border border-black">
            <div className="p-4 bg-white shadow-md flex">
                <img
                    src="https://www.pngmart.com/files/23/Profile-PNG-Photo.png"
                    alt="Avatar"
                    className="w-6 h-6 rounded-full mr-3 md:w-12 md:h-12"
                />
                <div className='flex flex-col'>
                <h2 className="text-xl font-bold ">Uday Kalyan</h2>
                <p className='text-xs'>Last seen on {timestamp}</p>
                </div>
                
            </div>
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                {[1, 2, 3, 4].map((msg) => (
                    <ChatMessage key={msg} sent={msg % 2 === 0} />
                ))}
            </div>
            <MessageInput />
        </div>
    );
};

export default ChatWindow;
