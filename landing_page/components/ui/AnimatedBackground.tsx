'use client';

import React from 'react';

interface AnimatedBackgroundProps {
  variant?: 'default' | 'dashboard' | 'minimal';
  children?: React.ReactNode;
}

export default function AnimatedBackground({ variant = 'default', children }: AnimatedBackgroundProps) {
  const getBackgroundElements = () => {
    switch (variant) {
      case 'dashboard':
        return (
          <>
            {/* Main gradient orbs */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse empbridge-float-1"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse empbridge-float-2" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-300/10 to-pink-300/10 rounded-full blur-3xl animate-pulse empbridge-float-3" style={{ animationDelay: '0.5s' }}></div>
            
            {/* Smaller accent orbs */}
            <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-yellow-400/15 to-orange-400/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-green-400/15 to-blue-400/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }}></div>
            
            {/* Geometric shapes */}
            <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-2xl rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
            <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          </>
        );
      
      case 'minimal':
        return (
          <>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </>
        );
      
      default:
        return (
          <>
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-300/10 to-pink-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </>
        );
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {getBackgroundElements()}
      {children}
    </div>
  );
}

// Particle system component for more advanced animations
export function ParticleBackground() {
  const particles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle}
          className="absolute w-2 h-2 bg-purple-400/20 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
}

// Grid pattern background
export function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }} />
    </div>
  );
}