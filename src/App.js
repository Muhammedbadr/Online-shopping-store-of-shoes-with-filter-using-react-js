import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Sections/Header';

function App() {
  return (
    <div className='w-full h-screen flex flex-col'>
      <Header />
      <div className="flex flex-grow">
        {/* Sidebar with custom width */}
        <div className='w-1/6 border-r-2 p-4'></div>
        
        {/* Main content taking the remaining space */}
        <div className='flex-grow p-4'></div>
      </div>
    </div>
  );
}

export default App;
