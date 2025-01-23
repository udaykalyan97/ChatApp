import ChatListItem from './ChatListItem';
import SearchBar from './SearchBar';
import UserProfile from './UserProfile';

const Sidebar = () => {
    const messageList = new Array(5).fill(0);

    return (
        <div className="w-full md:w-1/3 h-screen bg-gray-100 border-r flex flex-col">
            {/* User Profile */}
            <UserProfile className="p-3 border-b" />

            {/* Search Bar */}
            <SearchBar className="p-2 border-b" />

            {/* Chat List */}
            <div className="flex-1 overflow-y-auto">
                {messageList.map((item) => (
                    <ChatListItem key={item} />
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
