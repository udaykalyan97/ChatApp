import './index.css';
import Sidebar from './components/SideBar/SideBar';
import ChatWindow from './components/ChatWindow/ChatWindow';

function App() {
  return (
    <>
      {/* <h1 className="text-center text-green-500 mt-2 text-2xl sm:text-3xl md:text-4xl">
        Chat App
      </h1> */}
      <div className="flex flex-col md:flex-row h-screen">
        {/* Sidebar */}
        <Sidebar className="w-full md:w-1/3 lg:w-1/4 h-1/3 md:h-full border-r" />
        {/* Chat Window */}
        <ChatWindow className="flex-1 h-2/3 md:h-full" />
      </div>
    </>
  );
}

export default App;
