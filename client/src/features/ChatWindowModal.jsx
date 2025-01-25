import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ChatWindow from "../components/ChatWindow/ChatWindow";

const ChatWindowModal = ({toggleChatModal, selectedUser, isSmallScreen}) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="w-full md:w-2/3 lg:w-1/2 rounded-lg shadow-lg">
                <ChatWindow className="h-full" selectedUser={selectedUser} toggleChatModal={toggleChatModal} isSmallScreen={isSmallScreen}/>
            </div>
        </div>
    )
}

export default ChatWindowModal;