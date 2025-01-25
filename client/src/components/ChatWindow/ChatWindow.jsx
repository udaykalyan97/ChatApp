import ChatMessage from './ChatMessage';
import MessageInput from './MessageInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ChatWindow = ({ selectedUser, toggleChatModal, isSmallScreen, darkMode }) => {
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    
    return (
        <div className={`w-full h-screen flex flex-col border border-black`}>
            <div className={`p-4 bg-white shadow-md flex ${darkMode && 'bg-gray-900 text-white'}`}>
                {isSmallScreen ? <button
                    onClick={toggleChatModal}>
                    <FontAwesomeIcon icon={faArrowLeft} className="size-8 mr-3" />
                </button> : null}
                <img
                    src={selectedUser.avatar}
                    alt="Avatar"
                    className="w-10 h-10 rounded-full mr-3 md:w-12 md:h-12"
                />
                <div className='flex flex-col'>
                    <h2 className="text-xl font-bold ">{selectedUser.name}</h2>
                    <p className='text-xs'>Last seen on {selectedUser.lastSeen || timestamp}</p>
                </div>

            </div>
            <div className={`flex-1 overflow-y-auto p-4 bg-gray-50 ${darkMode && 'bg-gray-900 text-white'}`}>
                {selectedUser.messages.map((msg) => (
                    <ChatMessage key={msg.id} msg={msg} avatar={selectedUser.avatar} />
                ))}
            </div>
            <MessageInput darkMode={darkMode}/>
        </div>
    );
};

export default ChatWindow;
