import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import SettingsModal from "../../features/SettingsModal";
import ChatModal from "../../features/ChatModal";

const UserProfile = ({darkMode, users}) => {

    const [chatModal, setChatModal] = useState(false);
    const [settingsModal, setSettingsModal] = useState(false);
    const [userName, setUserName] = useState("Uday Kalyan")

    const openChatModal = () => {
        setChatModal(true);
    };

    const openSettingsModal = () => {
        setSettingsModal(true);
    };


    return (
        <div className={`p-3 border border-green-500 rounded-3xl flex items-center justify-between md:p-4 ${darkMode && 'bg-gray-900 text-white'}`}>
            {/* User Avatar */}
            <a href="/login"><div className="flex items-center">
                <img
                    src="https://www.profilebakery.com/wp-content/uploads/2023/03/Profilbild-AI.jpg"
                    alt="User Avatar"
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full"
                />
                <span className="ml-2 md:ml-3 font-semibold text-sm md:text-base">
                    {userName}
                </span>
            </div></a>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2 md:space-x-3">
                <button
                    title="New Chat"
                    className="p-2 hover:bg-gray-200 rounded-full md:p-3"
                >
                    <FontAwesomeIcon icon={faPlus} onClick={openChatModal} size="lg" />
                </button>
                <button
                    title="Settings"
                    className="p-2 hover:bg-gray-200 rounded-full md:p-3"
                >
                    <FontAwesomeIcon icon={faEllipsis} onClick={openSettingsModal} size="lg" />
                </button>
            </div>


            {/* Chat Modal */}
            {chatModal && <ChatModal setChatModal={setChatModal} darkMode={darkMode} users={users}/>}


            {/* Settings Modal */}
            {settingsModal && <SettingsModal setSettingsModal={setSettingsModal} darkMode={darkMode}/>}


        </div>
    );
};

export default UserProfile;
