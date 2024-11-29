import React, { useState } from 'react';
import { Plus, Music, MessageSquare, Calendar, Share2, Heart, Repeat2, MapPin, Link as LinkIcon } from 'lucide-react';

export function Collaborate() {
  const [activeTab, setActiveTab] = useState('artists');
  
  const artists = [
    {
      name: "Sarah Wilson",
      artistName: "SoulWave",
      role: "Producer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      location: "Los Angeles, CA",
      genres: ["Electronic", "Pop"],
      social: {
        spotify: "https://spotify.com",
        instagram: "https://instagram.com"
      }
    },
    {
      name: "Mike Chen",
      artistName: "MC Beats",
      role: "Beat Producer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      location: "New York, NY",
      genres: ["Hip-Hop", "Trap"],
      social: {
        spotify: "https://spotify.com",
        instagram: "https://instagram.com"
      }
    },
    {
      name: "Elena Rodriguez",
      artistName: "ElenaVox",
      role: "Vocalist",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      location: "Miami, FL",
      genres: ["R&B", "Soul"],
      social: {
        spotify: "https://spotify.com",
        instagram: "https://instagram.com"
      }
    },
    {
      name: "David Kim",
      artistName: "DK Sound",
      role: "Sound Engineer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      location: "Seattle, WA",
      genres: ["Rock", "Alternative"],
      social: {
        spotify: "https://spotify.com",
        instagram: "https://instagram.com"
      }
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 rounded-2xl p-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Collaboration Hub</h1>
            <p className="text-gray-400">Connect with talented artists and create something amazing</p>
          </div>
          <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl transition-colors">
            <Plus className="h-5 w-5" />
            Post Collaboration
          </button>
        </div>
      </section>

      {/* Navigation Tabs */}
      <nav className="flex space-x-1 bg-white/5 p-1 rounded-xl">
        {[
          { id: 'artists', label: 'Artists', icon: Music },
          { id: 'discussions', label: 'Discussions', icon: MessageSquare },
          { id: 'schedule', label: 'Schedule', icon: Calendar }
        ].map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium rounded-lg transition-all ${
              activeTab === id
                ? 'bg-purple-600 text-white'
                : 'hover:bg-white/10 text-gray-400'
            }`}
          >
            <Icon className="h-5 w-5" />
            {label}
          </button>
        ))}
      </nav>

      {/* Artists Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {artists.map((artist, index) => (
          <div key={index} className="bg-white/5 rounded-xl overflow-hidden group hover:bg-white/10 transition-all">
            <div className="relative h-48">
              <img
                src={artist.image}
                alt={artist.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-semibold text-lg">{artist.artistName}</h3>
                <p className="text-sm text-gray-300">{artist.name}</p>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                <MapPin className="h-4 w-4" />
                {artist.location}
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                  {artist.role}
                </span>
                {artist.genres.map((genre) => (
                  <span key={genre} className="bg-white/10 px-3 py-1 rounded-full text-sm">
                    {genre}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <a
                  href={artist.social.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  <LinkIcon className="h-5 w-5" />
                </a>
                <a
                  href={artist.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  <LinkIcon className="h-5 w-5" />
                </a>
                <button className="ml-auto bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm transition-colors">
                  Connect
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}