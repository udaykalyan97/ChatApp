import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AttachmentsModal from "../../features/AttachmentsModal";

const MessageInput = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    

    return (
        <div className="p-4 bg-white shadow-md flex items-center flex-col md:flex-row md:justify-between space-y-4 md:space-y-0">
            <FontAwesomeIcon
                className="p-2 cursor-pointer size-5"
                icon={faPlus}
                onClick={openModal}
            />
            <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 p-2 border rounded-full outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto"
            />
            <button className="mt-2 md:mt-0 bg-blue-500 text-white px-4 py-2 rounded-full w-full md:w-auto">
                Send
            </button>

            {/* Modal */}
            {showModal && <AttachmentsModal setShowModal={setShowModal} />}
        </div>
    );
};

export default MessageInput;
