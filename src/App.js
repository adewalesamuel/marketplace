import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Routes as AppRoutes } from './routes';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<AppRoutes.MainRoutes />} />
      </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
