import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Users, ArrowRight, Calendar, Clock, Music2, Sparkles, Search } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export function Dashboard() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);

  const recentProjects = [
    {
      title: "Summer Vibes Remix",
      collaborators: [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      ],
      status: "In Progress",
      lastActive: "2 hours ago"
    },
    {
      title: "Acoustic Sessions",
      collaborators: [
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      ],
      status: "Planning",
      lastActive: "1 day ago"
    }
  ];

  const upcomingEvents = [
    {
      title: "Mix Review Session",
      date: "Tomorrow, 3:00 PM",
      type: "Meeting"
    },
    {
      title: "Vocal Recording",
      date: "Friday, 2:00 PM",
      type: "Recording"
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main Content (Left and Middle) */}
      <div className="lg:col-span-2 space-y-8">
        {/* Welcome Section */}
        <section className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-6">
            {user?.profilePhoto ? (
              <img
                src={user.profilePhoto}
                alt={user.name}
                className="w-16 h-16 rounded-full object-cover"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center">
                <span className="text-2xl font-bold">
                  {user?.name.charAt(0)}
                </span>
              </div>
            )}
            <div>
              <h1 className="text-2xl font-bold">Welcome back, {user?.artistName || user?.name}!</h1>
              <p className="text-gray-400">{user?.role}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => navigate('/explore')}
              className="flex items-center justify-between bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <Search className="h-6 w-6 text-purple-400" />
                <div className="text-left">
                  <h3 className="font-semibold">Find Collaborators</h3>
                  <p className="text-sm text-gray-400">Discover talented artists</p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => navigate('/collaborate')}
              className="flex items-center justify-between bg-white/10 p-4 rounded-xl hover:bg-white/20 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <Plus className="h-6 w-6 text-purple-400" />
                <div className="text-left">
                  <h3 className="font-semibold">New Project</h3>
                  <p className="text-sm text-gray-400">Start collaborating</p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>

        {/* Recent Projects */}
        <section className="bg-white/5 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Recent Projects</h2>
            <button className="text-sm text-purple-400 hover:text-purple-300">View All</button>
          </div>

          <div className="space-y-4">
            {recentProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">{project.title}</h3>
                  <span className="text-sm text-gray-400">{project.lastActive}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {project.collaborators.map((url, i) => (
                      <img
                        key={i}
                        src={url}
                        alt="Collaborator"
                        className="w-8 h-8 rounded-full border-2 border-gray-900"
                      />
                    ))}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    project.status === 'In Progress'
                      ? 'bg-green-500/20 text-green-300'
                      : 'bg-yellow-500/20 text-yellow-300'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Right Sidebar */}
      <div className="space-y-8">
        {/* Quick Actions */}
        <section className="bg-white/5 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="space-y-2">
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-xl px-4 py-3 flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Create New Project
            </button>
            <button className="w-full bg-white/10 hover:bg-white/20 rounded-xl px-4 py-3 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Invite Collaborators
            </button>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="bg-white/5 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Upcoming Events</h2>
            <button className="text-sm text-purple-400 hover:text-purple-300">View Calendar</button>
          </div>

          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-purple-600/20 p-2 rounded-lg">
                    <Calendar className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{event.title}</h3>
                    <p className="text-sm text-gray-400">{event.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Activity Feed */}
        <section className="bg-white/5 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Music2 className="h-5 w-5 text-green-400" />
              </div>
              <div>
                <p className="text-sm">New track uploaded to "Summer Vibes Remix"</p>
                <span className="text-xs text-gray-400">2 hours ago</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <Users className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <p className="text-sm">Sarah joined "Acoustic Sessions"</p>
                <span className="text-xs text-gray-400">1 day ago</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}