import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Bell, UserCircle } from 'lucide-react';
import { Logo } from '../common/Logo';
import { useAuthStore } from '../../store/authStore';

export function FloatingNav() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-300">
      <div className="relative">
        {/* Blur background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-indigo-900/90 backdrop-blur-md rounded-2xl shadow-lg" />
        
        {/* Curved border */}
        <div className="absolute inset-0 rounded-2xl border border-white/10" />
        
        {/* Content */}
        <div className="relative px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <Logo />
            </Link>
            
            <div className="flex-1 max-w-xl mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for artists, projects, or tracks..."
                  className="w-full bg-white/10 border border-white/20 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link to="/explore" className="hover:text-purple-300">Explore</Link>
              <Link to="/collaborate" className="hover:text-purple-300">Collaborate</Link>
              {user ? (
                <>
                  <button className="p-2 hover:bg-white/10 rounded-full">
                    <Bell className="h-6 w-6" />
                  </button>
                  <div className="relative group">
                    {user.profilePhoto ? (
                      <img
                        src={user.profilePhoto}
                        alt={user.name}
                        className="w-8 h-8 rounded-full object-cover cursor-pointer"
                      />
                    ) : (
                      <button className="p-2 hover:bg-white/10 rounded-full">
                        <UserCircle className="h-6 w-6" />
                      </button>
                    )}
                    <div className="absolute right-0 mt-2 w-48 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-1 invisible group-hover:visible">
                      <Link to="/profile" className="block px-4 py-2 hover:bg-white/10">Profile</Link>
                      <Link to="/settings" className="block px-4 py-2 hover:bg-white/10">Settings</Link>
                      <button
                        onClick={() => {
                          logout();
                          navigate('/');
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-white/10"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <button
                  onClick={() => navigate('/auth')}
                  className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full font-medium"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}