import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import AttachmentsModal from "../../features/AttachmentsModal";

const MessageInput = ({darkMode}) => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };



    return (
        <div className={`p-4 border-t border-green-500 hadow-md flex items-center flex-row space-y-0 md:justify-between gap-4 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <FontAwesomeIcon
                className={`p-2 cursor-pointer text-lg ${darkMode ? 'text-gray-600' : 'text-black'} hover:bg-gray-200 hover:rounded-full`}
                icon={faPaperclip}
                onClick={openModal}
            />
            <input
                type="text"
                placeholder="Type a message..."
                className={`flex-1 p-2 border rounded-full outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-gray-900 text-white' : 'text-black'}`}
            />
            <button className="ml-3 bg-blue-500 text-white px-4 py-2 rounded-full">
                <FontAwesomeIcon icon={faPaperPlane} />
            </button>

            {/* Modal */}
            {showModal && <AttachmentsModal setShowModal={setShowModal} darkMode={darkMode}/>}
        </div>

    );
};

export default MessageInput;
