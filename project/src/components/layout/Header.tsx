import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Bell, UserCircle } from 'lucide-react';
import { Logo } from '../common/Logo';
import { useAuthStore } from '../../store/authStore';

export function Header() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const handleAuthClick = () => {
    navigate('/auth');
  };

  return (
    <header className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
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

          <nav className="flex items-center space-x-4">
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
                onClick={handleAuthClick}
                className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full font-medium transition-colors"
              >
                Sign In
              </button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}