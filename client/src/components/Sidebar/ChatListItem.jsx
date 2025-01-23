const ChatListItem = ({ user, onClick }) => {
    const { name, avatar, messages, lastSeen } = user;
  
    return (
      <div
        className="flex items-center px-4 py-3 hover:bg-gray-200 cursor-pointer"
        onClick={onClick}
      >
        {/* User Avatar */}
        <img
          src={avatar || "https://www.pngmart.com/files/23/Profile-PNG-Photo.png"}
          alt={`${name}'s Avatar`}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-4"
        />
  
        {/* Chat Details */}
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
            {name}
          </h4>
          <p className="text-gray-500 text-xs sm:text-sm truncate">
            {messages[messages.length-1].text || "No messages yet"}
          </p>
        </div>
  
        {/* Timestamp */}
        <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap ml-4">
          {lastSeen ||
            new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </span>
      </div>
    );
  };
  
  export default ChatListItem;
  