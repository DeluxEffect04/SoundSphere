import React from 'react';
import { Music2, Waves, Orbit } from 'lucide-react';
import styles from './Logo.module.css';

export function Logo() {
  return (
    <div className="relative flex items-center group">
      {/* Orbital ring animation */}
      <div className="absolute -inset-1 opacity-75 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rotate-0 group-hover:rotate-180 transition-transform duration-1000">
          <Orbit className="w-10 h-10 text-purple-400/50" />
        </div>
      </div>
      
      {/* Central music icon with pulse effect */}
      <div className="relative z-10 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full p-2 shadow-lg shadow-purple-500/20">
        <Music2 className="w-6 h-6 text-white animate-pulse" />
      </div>
      
      {/* Sound wave animation */}
      <div className="relative ml-2 group-hover:opacity-100 transition-opacity">
        <Waves 
          className="w-6 h-6 text-purple-400 absolute transform -translate-y-1/2 top-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500"
          style={{ animation: `${styles.wave} 2s ease-in-out infinite` }}
        />
        <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text ml-8">
          SoundSphere
        </span>
      </div>
    </div>
  );
}