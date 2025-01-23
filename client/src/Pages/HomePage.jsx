import React, { useState, useEffect } from "react";
import Sidebar from '../components/SideBar/SideBar';
import ChatWindow from '../components/ChatWindow/ChatWindow';
import mockUsers from "../utils/MockUsers.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {

    const [isChatOpen, setIsChatOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(mockUsers[mockUsers.length - 1]);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    // Function to handle chat modal toggle
    const toggleChatModal = () => {
        setIsChatOpen(!isChatOpen);
    };

    // Function to detect screen size and close chat if necessary
    const handleScreenSizeChange = () => {
        if (window.innerWidth >= 768) {  // 768px is the threshold for md and lg
            setIsChatOpen(false);
            setIsSmallScreen(false);
        } else {
            setIsSmallScreen(true);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleScreenSizeChange);
        return () => {
            window.removeEventListener('resize', handleScreenSizeChange);
        };
    }, []);

    return (
        <div className="flex flex-col md:flex-row h-screen">
            {/* Sidebar */}
            <Sidebar
                className="w-full md:w-1/3 lg:w-1/4 h-1/3 md:h-full border-r"
                users={mockUsers}
                setSelectedUser={setSelectedUser}
                {...(isSmallScreen ? { onUserClick: toggleChatModal } : { onUserClick: () => { } })}
            />



            {/* Chat Window for large screens */}
            {!isSmallScreen && (
                <ChatWindow className="flex-1 h-full" selectedUser={selectedUser} />
            )}



            {/* Chat Modal for medium and smaller screens */}
            {isChatOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="w-full md:w-2/3 lg:w-1/2 rounded-lg shadow-lg">
                        <button
                            onClick={toggleChatModal}
                            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                        >
                            <FontAwesomeIcon icon={faXmark} className="size-5"/>
                        </button>
                        <ChatWindow className="h-full" selectedUser={selectedUser} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default HomePage;
