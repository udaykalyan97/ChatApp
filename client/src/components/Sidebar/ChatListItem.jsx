const ChatListItem = () => {
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const receivedMessage = "Hello, How are you?"
    const receiverName = "Uday Kalyan"

    return (
        <div className="flex items-center px-4 py-3 hover:bg-gray-200 cursor-pointer">
            {/* User Avatar */}
            <img
                src="https://www.pngmart.com/files/23/Profile-PNG-Photo.png"
                alt="User Avatar"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-4"
            />
            
            {/* Chat Details */}
            <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                    {receiverName}
                </h4>
                <p className="text-gray-500 text-xs sm:text-sm truncate">
                    {receivedMessage}
                </p>
            </div>

            {/* Timestamp */}
            <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap ml-4">
                {timestamp}
            </span>
        </div>
    );
};

export default ChatListItem;
