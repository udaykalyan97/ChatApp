import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckDouble, faDownload } from "@fortawesome/free-solid-svg-icons";
import ImageModal from "../../features/ImageModal";

const Chatmsg = ({ msg, avatar, darkMode }) => {
    const isSent = msg.status === "sent";            // true if the msg is sent by user
    const isDelivered = msg.status === "delivered";  // true if the msg is delivered but not seen yet
    const isSeen = msg.status === "seen";            // true if the msg has been seen by the recipient
    const sentByUser = msg.sentByUser;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState("");

    const openFullscreen = (src) => {
        setModalImage(src);
        setIsModalOpen(true);   // Open modal with image
    };


    return (
        <div className={`flex items-center mb-4 ${sentByUser ? 'justify-end' : 'justify-start'} relative`} >
            {/* Avatar for received msgs */}
            {!sentByUser && (<img src={avatar} alt="Avatar" className="w-10 h-10 rounded-full mr-3 md:w-12 md:h-12" />)}

            {/* msg Bubble */}
            <div
                className={`max-w-xs p-3 rounded-lg ${sentByUser
                    ? `bg-green-400 rounded-br-none ${darkMode ? 'text-gray-600' : ''}`
                    : 'bg-gray-200 text-gray-800 rounded-bl-none'
                    } ${sentByUser ? 'md:text-lg' : 'md:text-base'}`}
            >
                <p>{msg.text}</p>
                {msg.media && (
                    <>
                        {msg.media.endsWith(".mp4") || msg.media.endsWith(".webm") ? (
                            <video
                                src={msg.media}
                                controls
                                className="mt-2 rounded-lg max-w-full"
                            />
                        ) : (
                            <div>
                                <div className="mt-2">
                                    {/* Image */}
                                    <img
                                        onClick={() => openFullscreen(msg.media)}
                                        src={msg.media}
                                        alt="Media"
                                        className="rounded-lg max-w-full cursor-pointer"
                                    />
                                </div>

                                {/* Modal for full-screen image */}
                                {isModalOpen && (<ImageModal modalImage={modalImage} setModalImage={setModalImage} setIsModalOpen={setIsModalOpen} />)}
                            </div>
                        )}
                    </>
                )}
                <div className="flex justify-end items-center mt-1">
                    <span className="text-xs text-gray-500">{msg.timestamp}</span>
                    {sentByUser &&
                        <div className="flex items-center space-x-1 ml-2">
                            {/* Status Icon */}
                            {isSent && (<FontAwesomeIcon icon={faCheck} className="text-xs text-gray-500" />)}
                            {isDelivered && (<FontAwesomeIcon icon={faCheckDouble} className="text-xs text-gray-500" />)}
                            {isSeen && (<FontAwesomeIcon icon={faCheckDouble} className="text-xs text-blue-500" />)}
                        </div>}
                </div>
            </div>
        </div>
    );
};

export default Chatmsg;
