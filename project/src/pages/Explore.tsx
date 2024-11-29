import React from 'react';
import { Search, Filter, Music2, Mic, Headphones, Clock, Star } from 'lucide-react';

export function Explore() {
  const projects = [
    {
      title: "Electronic Pop Collaboration",
      genre: ["Pop", "Electronic"],
      needs: ["Vocalist", "Mixing Engineer"],
      creator: {
        name: "Alex Rivera",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
        role: "Producer"
      },
      deadline: "2 weeks",
      description: "Looking for a vocalist and mixing engineer for an upbeat electronic pop track. The instrumental is complete and ready for vocals."
    },
    {
      title: "Indie Rock Album Project",
      genre: ["Rock", "Indie"],
      needs: ["Bassist", "Drummer"],
      creator: {
        name: "Emma Chen",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
        role: "Guitarist/Vocalist"
      },
      deadline: "3 months",
      description: "Forming a band for a 10-track indie rock album. Looking for dedicated musicians for a long-term project."
    },
    {
      title: "Hip-Hop Beat Collection",
      genre: ["Hip-Hop", "Rap"],
      needs: ["Rapper", "Producer"],
      creator: {
        name: "Marcus Johnson",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        role: "Beat Maker"
      },
      deadline: "1 month",
      description: "Got a collection of fresh beats ready for collaboration. Seeking rappers and additional producers to enhance the tracks."
    }
  ];

  return (
    <div className="space-y-12">
      {/* Search and Filter Section */}
      <section className="bg-white/5 rounded-2xl p-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects, artists, or genres..."
              className="w-full bg-white/10 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-xl hover:bg-white/20 transition-colors">
            <Filter className="h-5 w-5" />
            Filters
          </button>
        </div>

        {/* Quick Filters */}
        <div className="mt-6 flex flex-wrap gap-3">
          {['All Projects', 'Vocalists', 'Producers', 'Instrumentalists', 'Mixing Engineers'].map((filter) => (
            <button
              key={filter}
              className="bg-white/5 px-4 py-2 rounded-full hover:bg-white/10 transition-colors"
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Project Categories */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { icon: Music2, label: 'Production', count: '2.5k projects' },
          { icon: Mic, label: 'Vocals', count: '1.8k projects' },
          { icon: Headphones, label: 'Mixing', count: '950 projects' },
          { icon: Clock, label: 'Urgent', count: '300 projects' }
        ].map(({ icon: Icon, label, count }) => (
          <div
            key={label}
            className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all cursor-pointer group"
          >
            <Icon className="h-8 w-8 text-purple-400 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-lg">{label}</h3>
            <p className="text-gray-400">{count}</p>
          </div>
        ))}
      </section>

      {/* Featured Projects */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={project.creator.image}
                  alt={project.creator.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{project.creator.name}</h3>
                  <p className="text-sm text-gray-400">{project.creator.role}</p>
                </div>
              </div>
              
              <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.genre.map((g) => (
                  <span key={g} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                    {g}
                  </span>
                ))}
              </div>
              
              <div className="border-t border-white/10 pt-4 mt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm text-gray-400">Looking for:</span>
                  </div>
                  <span className="text-sm text-purple-400">{project.deadline} left</span>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.needs.map((need) => (
                    <span key={need} className="bg-white/10 px-3 py-1 rounded-full text-sm">
                      {need}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}