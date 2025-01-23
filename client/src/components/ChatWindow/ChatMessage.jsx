import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckDouble } from "@fortawesome/free-solid-svg-icons";

const ChatMessage = ({ msg, avatar }) => {
    const isSent = msg.status === "sent"; // true if the message is sent by user
    const isDelivered = msg.status === "delivered"; // true if the message is delivered but not seen yet
    const isSeen = msg.status === "seen"; // true if the message has been seen by the recipient
    const sentByUser = msg.sentByUser;


    return (
        <div
            className={`flex items-center mb-4 ${sentByUser ? 'justify-end' : 'justify-start'} relative`}
        >
            {/* Avatar for received messages */}
            {!sentByUser && (
                <img
                    src={avatar}
                    alt="Avatar"
                    className="w-10 h-10 rounded-full mr-3 md:w-12 md:h-12"
                />
            )}

            {/* Message Bubble */}
            <div
                className={`max-w-xs p-3 rounded-lg ${sentByUser
                    ? 'bg-green-400 text-white rounded-br-none'
                    : 'bg-gray-200 text-gray-800 rounded-bl-none'
                    } ${sentByUser ? 'md:text-lg' : 'md:text-base'}`}
            >

                <p>{msg.text}</p>
                <div className="flex justify-end items-center mt-1">
                    <span className="text-xs text-gray-500">{msg.timestamp}</span>
                    {sentByUser &&
                        <div className="flex items-center space-x-1 ml-2">
                            {/* Status Icon */}
                            {isSent && (
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className="text-xs text-gray-500"
                                />
                            )}
                            {isDelivered && (
                                <FontAwesomeIcon
                                    icon={faCheckDouble}
                                    className="text-xs text-gray-500"
                                />
                            )}
                            {isSeen && (
                                <FontAwesomeIcon
                                    icon={faCheckDouble}
                                    className="text-xs text-blue-500"
                                />
                            )}
                        </div>}
                </div>
            </div>
        </div>
    );
};

export default ChatMessage;
