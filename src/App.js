import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoutes from './utiils/PrivateRoutes';
import Visit from './components/Visit';
import Maped from './components/Maped';
import MonthlyDeposite from './components/MonthlyDeposite';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<PrivateRoutes />}>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/visit" element={<Visit />} />
      <Route path="/maped" element={<Maped />} />
      <Route path="/monthly-deposite" element={<MonthlyDeposite />} />

       </Route>
      </Routes>
  );
}

export default App;
