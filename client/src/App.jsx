import './index.css';
import LoginPage from './components/Register/Login';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './Pages/HomePage';
import RegisterPage from './Pages/RegisterPage';

function App() {
  return (
    <>
      {/* <h1 className="text-center text-green-500 mt-2 text-2xl sm:text-3xl md:text-4xl">
        Chat App
      </h1> */}

<BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<RegisterPage login={true}/>} />
          <Route path="/signup" element={<RegisterPage login={false}/>} />
        </Routes>

</BrowserRouter>

    </>
  );
}

export default App;
