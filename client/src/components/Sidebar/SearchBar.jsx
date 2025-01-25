const SearchBar = ({darkMode}) => {
    return (
      <div className={`p-3 border-b bg-gray-100 ${darkMode && 'bg-gray-900 text-white'}`}>
        <input
          type="text"
          placeholder="Search or start a new chat"
          className={`w-full p-2 sm:p-3 border rounded-full outline-none text-sm sm:text-base focus:ring-2 focus:ring-blue-500 transition-all ${darkMode && 'bg-gray-900 text-white'}`}
        />
      </div>
    );
  };
  
  export default SearchBar;
  