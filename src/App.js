import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Footer from './components/Footer/Footer';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="App">
      <Navbar onSearchChange={handleSearchChange} />
      <Outlet context={{ searchQuery }} />
      <Footer />
    </div>
  );
}

export default App;