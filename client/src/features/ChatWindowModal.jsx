import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ChatWindow from "../components/ChatWindow/ChatWindow";

const ChatWindowModal = ({toggleChatModal, selectedUser}) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="w-full md:w-2/3 lg:w-1/2 rounded-lg shadow-lg">
                <button
                    onClick={toggleChatModal}
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                >
                    <FontAwesomeIcon icon={faXmark} className="size-5" />
                </button>
                <ChatWindow className="h-full" selectedUser={selectedUser} />
            </div>
        </div>
    )
}

export default ChatWindowModal;