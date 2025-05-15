// frontend/src/App.js
import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import AdminDashboard from "./pages/AdminDashboard";
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import OrderPage from './pages/OrderPage';
import PizzaDetails from './pages/PizzaDetails';
import Summary from './pages/Summary';

function App() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/message')
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(err => console.error("Backend not connected:", err));
  }, []);

  return (
    <Router>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/pizza/:id" element={<PizzaDetails />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
    </Router>
  );
}

export default App;
