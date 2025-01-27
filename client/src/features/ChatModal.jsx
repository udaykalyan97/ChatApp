import React from "react";

const ChatModal = ({setChatModal, darkMode}) => {

    const closeChatModal = () => {
        setChatModal(false);
    };


    return (
        <>
            <div
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                onClick={closeChatModal}
            >
                <div
                    className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} rounded-lg shadow-lg p-6 w-64`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <h2 className="text-xl font-bold mb-4">Select Option</h2>
                    <ul className="space-y-2">
                        <li className="cursor-pointer hover:bg-gray-500 p-2 rounded">New Chat</li>
                        <li className="cursor-pointer hover:bg-gray-500 p-2 rounded">New Group Chat</li>
                    </ul>
                </div>
            </div>
        </>
    )
}


export default ChatModal;

