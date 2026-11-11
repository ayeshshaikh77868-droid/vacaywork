import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Added Link to imports
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Rooms from './pages/Rooms/Rooms';
import AddRoom from './pages/Rooms/AddRoom';
import Matching from './pages/Matching/Matching';
import Expenses from './pages/Expenses/Expenses';
import Chat from './pages/Chat/Chat';
import Dashboard from './pages/Dashboard/Dashboard';
import ChoreSync from './pages/ChoreSync/ChoreSync';

// Landing Screen Component with Working Navigation Links
const Home = () => {
  return (
    <div style={{ paddingTop: '160px', paddingBottom: '80px', textAlign: 'center', maxWidth: '850px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
      <h1 style={{ fontSize: '3.8rem', fontWeight: '900', color: 'var(--dark-bg)', lineHeight: '1.25', letterSpacing: '-1.5px' }}>
        Find Your Perfect Space & <span style={{ color: 'var(--primary)' }}>Compatible Roommates</span>
      </h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginTop: '24px', lineHeight: '1.8', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
        RoomSync brings together room listings, verified roommate matching, message coordination, and shared bill tracking in one beautiful platform.
      </p>
      
      {/* Updated Buttons to React Router Link Elements */}
      <div style={{ marginTop: '35px', display: 'flex', gap: '15px', justifyContent: 'center' }}>
        <Link 
          to="/rooms" 
          style={{ 
            padding: '0.9rem 2.2rem', 
            background: 'var(--primary)', 
            color: 'white', 
            border: 'none', 
            borderRadius: 'var(--radius-lg)', 
            fontSize: '1rem', 
            fontWeight: '600', 
            cursor: 'pointer', 
            textDecoration: 'none', // Prevents default underline styles
            display: 'inline-block',
            transition: 'var(--transition)' 
          }}
        >
          Browse Rooms
        </Link>
        
        <Link 
          to="/matching" 
          style={{ 
            padding: '0.9rem 2.2rem', 
            background: 'white', 
            color: 'var(--dark-bg)', 
            border: '1px solid var(--border-color)', 
            borderRadius: 'var(--radius-lg)', 
            fontSize: '1rem', 
            fontWeight: '600', 
            cursor: 'pointer', 
            textDecoration: 'none', // Prevents default underline styles
            display: 'inline-block',
            transition: 'var(--transition)' 
          }}
        >
          Meet Roommates
        </Link>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/add" element={<AddRoom />} />
          <Route path="/matching" element={<Matching />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/chat" element={<Chat />} /> 
          <Route path="/dashboard" element={<Dashboard />} /> 
          <Route path="/chores" element={<ChoreSync />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
