import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './routes/Home'
import Login from './routes/Login'
import Register from './routes/Register';
import Dashboard from './routes/Dashboard';
import Goals from './routes/Goals';
import Reminder from './routes/Reminder';
import Resources from './routes/Resources';
import Services from './routes/Services';
import About from './routes/About';

function App() {
  return (
    <div >
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/reminder" element={<Reminder />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
