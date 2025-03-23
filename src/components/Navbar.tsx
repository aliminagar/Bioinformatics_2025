import React from 'react';
import { NavLink } from 'react-router-dom';
import { Dna } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-primary py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center space-x-2">
            <Dna className="h-8 w-8 text-accent" />
            <span className="text-white font-poppins text-xl font-bold">BioSpark</span>
          </NavLink>
          
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>
            <NavLink to="/features" className="nav-link">Features</NavLink>
            <NavLink to="/tools" className="nav-link">Tools</NavLink>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;