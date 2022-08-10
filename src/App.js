import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Routes as AppRoutes } from './routes';

import './App.css';

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
