import ChatListItem from './ChatListItem';
import SearchBar from './SearchBar';
import UserProfile from './UserProfile';

const Sidebar = ({ className, onUserClick, users, setSelectedUser }) => {

    const handleUserClick = (user) => {
        setSelectedUser(user);
      };

    return (
        <div className={`${className} w-full md:w-1/3 h-screen bg-gray-100 border-r flex flex-col`}>
            {/* User Profile */}
            <UserProfile className="p-3 border-b" />

            {/* Search Bar */}
            <SearchBar className="p-2 border-b" />

            {/* Chat List */}
            <div className="flex-1 overflow-y-auto">
                {users.map((user) => (
                    <ChatListItem
                        key={user.id}                                       // Unique key
                        user={user}                                         // Pass user data as props
                        onClick={() =>{
                            onUserClick(user);
                            handleUserClick(user);
                        }}                   // Trigger callback on click
                    />
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
