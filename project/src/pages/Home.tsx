import React from 'react';
import { ArrowRight, Sparkles, Users, Calendar, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

export function Home() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);

  const handleCollabClick = () => {
    if (!user) {
      navigate('/auth');
    } else {
      navigate('/collaborate');
    }
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Collaborate. Create. Connect.
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join the next generation of music creators. Find collaborators, share your work,
          and build something amazing together.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleCollabClick}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2"
          >
            Start Collaborating <ArrowRight className="h-5 w-5" />
          </button>
          <button
            onClick={() => navigate('/explore')}
            className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-medium"
          >
            Explore Projects
          </button>
        </div>
      </section>

      {/* Rest of the component remains the same */}
    </div>
  );
}