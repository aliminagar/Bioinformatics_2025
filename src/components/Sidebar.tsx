import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Home, History, BookOpen, Brain, PenTool as Tool, Library, Mail, Dna } from 'lucide-react';
import { cn } from '../lib/utils';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const navItems = [
    { path: '/home', icon: Home, label: 'Home' }, // Updated path to /home
    { path: '/history', icon: History, label: 'History' },
    { path: '/core-concepts', icon: BookOpen, label: 'Core Concepts' },
    { path: '/mutations', icon: Dna, label: 'Mutations' },
    { path: '/advanced-topics', icon: Brain, label: 'Advanced Topics' },
    { path: '/tools', icon: Tool, label: 'Tools & Techniques' },
    { path: '/resources', icon: Library, label: 'Resources' },
    { path: '/contact', icon: Mail, label: 'Contact' },
  ];

  return (
    <>
      <button
        className="fixed top-4 left-4 z-50 md:hidden bg-white p-2 rounded-lg shadow-lg"
        onClick={toggleSidebar}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside className={cn('sidebar', isOpen ? 'sidebar-open' : 'sidebar-closed')}>
        <div className="p-6">
          <h1 className="text-2xl font-roboto-slab font-bold text-primary mb-8">BioSpark</h1>
          <nav className="space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    'flex items-center space-x-3 p-3 rounded-lg transition-colors',
                    isActive
                      ? 'bg-blue-50 text-primary font-medium'
                      : 'text-gray-600 hover:bg-gray-50'
                  )
                }
                onClick={() => window.innerWidth < 768 && toggleSidebar()}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;