import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import AttachmentsModal from "../../features/AttachmentsModal";

const MessageInput = ({darkMode}) => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };



    return (
        <div className={`p-4 bg-white shadow-md flex items-center flex-row space-y-0 md:justify-between gap-4 ${darkMode && 'bg-gray-900 text-white'}`}>
            <FontAwesomeIcon
                className="p-2 cursor-pointer text-lg hover:bg-gray-200 hover:rounded-full"
                icon={faPlus}
                onClick={openModal}
            />
            <input
                type="text"
                placeholder="Type a message..."
                className={`flex-1 p-2 border rounded-full outline-none focus:ring-2 focus:ring-blue-500 ${darkMode && 'bg-gray-900 text-white'}`}
            />
            <button className="ml-3 bg-blue-500 text-white px-4 py-2 rounded-full">
                <FontAwesomeIcon icon={faPaperPlane} />
            </button>

            {/* Modal */}
            {showModal && <AttachmentsModal setShowModal={setShowModal} />}
        </div>

    );
};

export default MessageInput;
