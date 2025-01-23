import React, {useState} from "react";
import Sidebar from '../components/SideBar/SideBar';
import ChatWindow from '../components/ChatWindow/ChatWindow';
import mockUsers from "../utils/MockUsers.js";


const HomePage = () => {

    const [isChatOpen, setIsChatOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(mockUsers[mockUsers.length - 1]);

    // Function to handle chat modal toggle
    const toggleChatModal = () => {
        setIsChatOpen(!isChatOpen);
    };


    return (
        <div className="flex flex-col md:flex-row h-screen">
            {/* Sidebar */}
            <Sidebar 
                className="w-full md:w-1/3 lg:w-1/4 h-1/3 md:h-full border-r"
                onUserClick={toggleChatModal} // Simulate linking UserProfile with chat modal
                users={mockUsers}
                setSelectedUser = {setSelectedUser}
            />

            {/* Chat Window for large screens */}
            <ChatWindow className="hidden md:flex flex-1 h-full" selectedUser={selectedUser} />

            {/* Chat Modal for medium and smaller screens */}
            {isChatOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="w-full md:w-2/3 lg:w-1/2 rounded-lg shadow-lg">
                        <button
                            onClick={toggleChatModal}
                            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                        >
                            Close
                        </button>
                        <ChatWindow className="h-full" selectedUser={selectedUser} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default HomePage;