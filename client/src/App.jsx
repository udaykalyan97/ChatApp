import './index.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './components/Register/Login';
import HomePage from './Pages/HomePage';
import RegisterPage from './Pages/RegisterPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOff,faToggleOn } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'dark' : ''} h-screen`}>
      <div className="dark:bg-gray-800 dark:text-white h-full">
        <div className="p-4 flex justify-between">
          <h1 className="text-center text-green-500 mt-2 text-2xl sm:text-3xl md:text-4xl">
            Chat App
          </h1>

          {/* Dark mode toggle button */}
        <div>
          <span>Dark Mode</span><button
            onClick={toggleDarkMode}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? <FontAwesomeIcon icon={faToggleOn} /> : <FontAwesomeIcon icon={faToggleOff} />}
          </button>
        </div></div>

        {/* Routes */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage darkMode={darkMode} />} />
            <Route path="/login" element={<RegisterPage login={true} />} />
            <Route path="/signup" element={<RegisterPage login={false} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
