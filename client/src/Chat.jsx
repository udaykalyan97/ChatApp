import React, { useEffect, useState } from "react";
import Avatar from "./Avatar";
import Logo from "./Logo";

const Chat = () => {

    const [ws, setWs] = useState(null);
    const [onlinePeople, setOnlinePeople] = useState({});
    const [selectedUserId, setSelectedUserId] = useState(null);

    useEffect(()=>{
        const ws = new WebSocket('ws://localhost:4002');
        setWs(ws);
        ws.addEventListener('message', handleMessage);

    },[]);

    const showOnlinePeople = (peopleArray) => {
        const people = new Set();
        peopleArray.forEach(({userId,username}) => {
            people[userId] = username;
        });
        setOnlinePeople(people);
    }

    const handleMessage = (e) => {
        const messageData = JSON.parse(e.data);
        if('online' in messageData){
            showOnlinePeople(messageData.online);
        }
    }


    return(
        <div className="flex h-screen">
            <div className="bg-white w-1/3">
                <Logo />
                {Object.keys(onlinePeople).map(userId => (
                    <div onClick={()=>setSelectedUserId(userId)}
                        className={"border-b border-gray-100 py-2 flex items-center pl-4 gap-2 cursor-pointer " + (userId === selectedUserId ? "bg-blue-50" : "")}>
                        <Avatar username={onlinePeople[userId]} userId={userId} />
                        <span className="text-gray-800">{onlinePeople[userId]}</span>
                    </div>
                ))}
            </div>
            <div className="flex flex-col bg-blue-50 w-2/3 mx-2">
                <div className="flex-grow">
                    Messages with selected person 
                </div>   
                <div className="flex gap-2">
                    <input type="text" 
                        placeholder="Type your message here" 
                        className="bg-white flex-grow border p-2 rounded-sm" />
                    <button className="bg-blue-500 p-2 text-white rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}


export default Chat;