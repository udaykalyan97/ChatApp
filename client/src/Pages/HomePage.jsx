import React, { useState, useEffect } from "react";
import Sidebar from '../components/SideBar/SideBar';
import ChatWindow from '../components/ChatWindow/ChatWindow';
import mockUsers from "../utils/MockUsers.js";
import ChatWindowModal from "../features/ChatWindowModal.jsx";

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
            { isChatOpen && <ChatWindowModal toggleChatModal={toggleChatModal} selectedUser={selectedUser}/> }
        </div>
    );
};

export default HomePage;
