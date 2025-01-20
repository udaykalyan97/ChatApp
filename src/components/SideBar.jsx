import React from "react";

const Sidebar = () => {
  const chats = [
    { id: 1, name: "Alice", lastMessage: "Hey, how are you?", time: "2:30 PM" },
    { id: 2, name: "Bob", lastMessage: "See you soon!", time: "1:15 PM" },
    { id: 3, name: "Charlie", lastMessage: "Got it, thanks!", time: "12:45 PM" },
    { id: 4, name: "Diana", lastMessage: "Let's catch up later.", time: "11:30 AM" },
  ];

  return (
    <div className="flex flex-col">
      {/* User Profile */}
      <div className="flex items-center space-x-4 p-4 border-b">
        <img
          src="https://via.placeholder.com/50"
          alt="User"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h2 className="text-lg font-bold">John Doe</h2>
          <p className="text-sm text-gray-400">Online</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="p-4">
        <input
          type="text"
          placeholder="Search chats..."
          className="w-full p-2 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Chats List */}
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className="flex items-center space-x-4 p-4 hover:bg-gray-700 cursor-pointer"
          >
            <img
              src={`https://via.placeholder.com/40?text=${chat.name[0]}`}
              alt={chat.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <h3 className="text-base font-medium">{chat.name}</h3>
              <p className="text-sm text-gray-400 truncate">{chat.lastMessage}</p>
            </div>
            <span className="text-sm text-gray-500">{chat.time}</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700 text-center text-sm">
        <button className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition-all">
          New Chat
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
