import React from 'react';

export function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-indigo-900/20" />
      
      {/* Animated circles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-screen animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${300 + i * 100}px`,
              height: `${300 + i * 100}px`,
              background: `radial-gradient(circle, ${
                i === 0 ? 'rgba(139, 92, 246, 0.15)' :
                i === 1 ? 'rgba(79, 70, 229, 0.1)' :
                'rgba(67, 56, 202, 0.05)'
              } 0%, transparent 70%)`,
              animation: `pulse ${8 + i * 2}s infinite`,
              animationDelay: `${i * 1}s`,
            }}
          />
        ))}
      </div>
      
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />
    </div>
  );
}