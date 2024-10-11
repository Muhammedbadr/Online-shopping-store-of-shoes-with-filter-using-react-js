import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Sections/Header';
import MainProjectCards from './Sections/MainProjectCards';
import Fillters from './Sections/Fillters';
function App() {
  return (
    <div className='w-full h-screen flex flex-col'>
      <Header />
      <div className="flex flex-grow">
        {/* Sidebar with custom width */}
        <div className='w-48 border-r-2 p-4'>
          <Fillters/>
        </div>
        
        {/* Main content taking the remaining space */}
        <div className='flex-grow p-4'>
           <MainProjectCards />
        </div>
      </div>
    </div>
  );
}

export default App;
