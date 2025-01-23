import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const ChatMessage = ({ sent, seen }) => {
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <div
            className={`flex items-center mb-4 ${sent ? 'justify-end' : 'justify-start'} relative`}
        >
            {!sent && (
                <img
                    src="https://www.pngmart.com/files/23/Profile-PNG-Photo.png"
                    alt="Avatar"
                    className="w-10 h-10 rounded-full mr-3 md:w-12 md:h-12"
                />
            )}


            <div
                className={`max-w-xs p-3 rounded-lg ${sent
                        ? 'bg-green-400 text-white rounded-br-none'
                        : 'bg-gray-200 text-gray-800 rounded-bl-none'
                    } ${sent ? 'md:text-lg' : 'md:text-base'}`}
            >

                
                <p>Hello! This is a message.</p>
                <div className="flex justify-end items-center mt-1">
                    <span className="text-xs text-gray-500">{timestamp}</span>
                    {sent && (
                        <div className="flex items-center space-x-1">
                            <span className="text-xs text-gray-500">
                                {seen ? 'seen' : <FontAwesomeIcon icon={faCheck} />}
                            </span>
                            
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChatMessage;
