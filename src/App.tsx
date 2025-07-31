import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import SmokyCursor from './components/SmokyCursor'; // Uncomment the import
import Home from './pages/Home';
import History from './pages/History';
import CoreConcepts from './pages/CoreConcepts';
import Mutations from './pages/Mutations';
import AdvancedTopics from './pages/AdvancedTopics';
import Tools from './pages/Tools';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <SmokyCursor /> {/* Add the SmokyCursor component here */}
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="main-content p-4 md:p-8 flex-grow">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/core-concepts" element={<CoreConcepts />} />
            <Route path="/mutations" element={<Mutations />} />
            <Route path="/advanced-topics" element={<AdvancedTopics />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;