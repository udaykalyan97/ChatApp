import React, { useState } from "react";

const ChatModal = ({ setChatModal, darkMode, users }) => {
    const [searchEmail, setSearchEmail] = useState("");
    const [selectedUsers, setSelectedUsers] = useState([]); // For group chat, we store multiple users
    const [selectedUser, setSelectedUser] = useState(null); // For new chat, we store a single user
    const [selectedOption, setSelectedOption] = useState(null); // Tracks selected option (New Chat or New Group Chat)

    const closeChatModal = () => {
        setChatModal(false);
    };

    const filteredUsers = users.filter(user =>
        user.email.toLowerCase().includes(searchEmail.toLowerCase())
    );

    const handleUserSelect = (user) => {
        if (selectedOption === "New Chat") {
            setSelectedUser(user); // For New Chat, select a single user
        } else if (selectedOption === "New Group Chat") {
            setSelectedUsers(prevUsers => {
                if (!prevUsers.some(u => u.email === user.email)) {
                    return [...prevUsers, user]; // For Group Chat, add user to selected list if not already selected
                }
                return prevUsers;
            });
        }
        setSearchEmail(""); // Clear search field after selection
    };

    const handleUserDeselect = (user) => {
        if (selectedOption === "New Chat") {
            setSelectedUser(null); // For New Chat, deselect the user
        } else if (selectedOption === "New Group Chat") {
            setSelectedUsers(prevUsers => prevUsers.filter(u => u.email !== user.email)); // For Group Chat, remove user from list
        }
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        if (option === "New Chat") {
            setSelectedUsers([]); // Clear selected users if switching to New Chat
        } else if (option === "New Group Chat") {
            setSelectedUser(null);  // Clear single selected user if switching to New Group Chat
        }
    };

    const handleConfirmSelection = () => {
        console.log("Selected users for group chat:", selectedUsers);
        console.log("Selected user for new chat:", selectedUser);
    };

    return (
        <>
            <div
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                onClick={closeChatModal}
            >
                <div
                    className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} rounded-lg shadow-lg p-6 w-96`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex justify-center items-center">
                        <ul className="flex border border-black rounded-lg">
                            <li
                                className={`cursor-pointer p-2 rounded text-center 
                ${selectedOption === "New Chat" ? "bg-green-500" : "hover:bg-gray-500"}`}
                                onClick={() => handleOptionSelect("New Chat")}
                            >
                                New Chat
                            </li>
                            <li
                                className={`cursor-pointer p-2 rounded text-center 
                ${selectedOption === "New Group Chat" ? "bg-green-500" : "hover:bg-gray-500"}`}
                                onClick={() => handleOptionSelect("New Group Chat")}
                            >
                                Group Chat
                            </li>
                        </ul>
                    </div>

                    {/* Show "Select User" only when "New Chat" is selected */}
                    {selectedOption === "New Chat" && (
                        <div className="mt-4">
                            {/* Selected user display */}
                            {selectedUser && (
                                <div className="flex flex-col items-center">
                                    <div className="mt-4 space-x-2">
                                        <span>{selectedUser.name}</span>
                                        <button
                                            className="text-red-500 font-semibold"
                                            onClick={() => handleUserDeselect(selectedUser)}
                                        >
                                            ✖
                                        </button>
                                    </div>
                                    <button
                                        className="mt-4 w-1/2 bg-green-400 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition-all"
                                        onClick={handleConfirmSelection}
                                    >
                                        Start Chat
                                    </button>
                                </div>
                            )}

                            {/* User search and list */}
                            {!selectedUser && (
                                <div>
                                    {/* <h3 className="text-lg font-semibold">New Chat</h3> */}
                                    <input
                                        type="text"
                                        className="w-full p-2 mt-2 border rounded"
                                        placeholder="Search by email"
                                        value={searchEmail}
                                        onChange={(e) => setSearchEmail(e.target.value)}
                                    />
                                    <ul className="mt-4">
                                        {filteredUsers.length > 0 ? (
                                            filteredUsers.map((user, index) => (
                                                <li
                                                    key={index}
                                                    className="cursor-pointer hover:bg-gray-500 p-2 rounded"
                                                    onClick={() => handleUserSelect(user)}
                                                >
                                                    {user.email}
                                                </li>
                                            ))
                                        ) : (
                                            <li className="text-gray-500">No users found</li>
                                        )}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Show "Select Users" when "New Group Chat" is selected */}
                    {selectedOption === "New Group Chat" && (
                        <div>
                            {/* Display selected users for the group */}
                            {selectedUsers.length > 0 && (
                                <div className="flex justify-center align-items">
                                    <div className="mt-4">
                                        {/* "Okay" button for confirming the selection */}
                                        <button
                                            className="w-full bg-green-400 hover:bg-green-600 text-white mb-2 font-semibold rounded-lg transition-all"
                                            onClick={handleConfirmSelection}
                                        >
                                            Create Group
                                        </button>
                                        {/* <h3 className="text-lg font-semibold">Selected Users:</h3> */}
                                        <div>
                                            {selectedUsers.map((user, index) => (
                                                <div key={index} className="space-x-2">
                                                    <span>{user.name}</span>
                                                    <button
                                                        className="text-red-500 font-semibold"
                                                        onClick={() => handleUserDeselect(user)}
                                                    >
                                                        ✖
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}


                            {/* <h3 className="text-lg font-semibold">Group Chat</h3> */}

                            {/* User search and list */}
                            <input
                                type="text"
                                className="w-full p-2 mt-2 border rounded"
                                placeholder="Search by email"
                                value={searchEmail}
                                onChange={(e) => setSearchEmail(e.target.value)}
                            />
                            <ul className="mt-4">
                                {filteredUsers.length > 0 ? (
                                    filteredUsers.map((user, index) => (
                                        <li
                                            key={index}
                                            className="cursor-pointer hover:bg-gray-500 p-2 rounded"
                                            onClick={() => handleUserSelect(user)}
                                        >
                                            {user.email}
                                        </li>
                                    ))
                                ) : (
                                    <li className="text-gray-500">No users found</li>
                                )}
                            </ul>


                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ChatModal;
