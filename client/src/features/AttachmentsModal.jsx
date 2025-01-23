import React from "react";


const AttachmentsModal = ({setShowModal}) => {

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                onClick={closeModal}
            >
                <div
                    className="bg-white rounded-lg shadow-lg p-6 w-64 absolute left-1/4 bottom-14"
                    onClick={(e) => e.stopPropagation()}
                >
                    <h2 className="text-xl font-bold mb-4">Select Option</h2>
                    <ul className="space-y-2">
                        <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">Files</li>
                        <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">Photos</li>
                        <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">Videos</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default AttachmentsModal;