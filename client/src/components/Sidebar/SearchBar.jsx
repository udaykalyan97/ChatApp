const SearchBar = () => {
    return (
      <div className="p-3 border-b bg-gray-100">
        <input
          type="text"
          placeholder="Search or start a new chat"
          className="w-full p-2 sm:p-3 border rounded-full outline-none text-sm sm:text-base focus:ring-2 focus:ring-blue-500 transition-all"
        />
      </div>
    );
  };
  
  export default SearchBar;
  