import React from 'react';
import { Music2 } from 'lucide-react';

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <Music2 className="w-16 h-16 text-purple-500 animate-bounce" />
          <div className="absolute inset-0 w-16 h-16 border-4 border-purple-500/30 rounded-full animate-ping" />
        </div>
        <p className="mt-4 text-xl font-medium bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text animate-pulse">
          Loading SoundSphere...
        </p>
      </div>
    </div>
  );
}