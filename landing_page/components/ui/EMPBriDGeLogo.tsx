'use client';

import React from 'react';
import { Building2, Crown, Zap } from 'lucide-react';

interface EMPBriDGeLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  showText?: boolean;
  variant?: 'default' | 'white' | 'gradient';
}

export default function EMPBriDGeLogo({ 
  size = 'md', 
  animated = true, 
  showText = true,
  variant = 'default'
}: EMPBriDGeLogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl'
  };

  const iconSizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-10 h-10'
  };

  const crownSizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
    xl: 'w-5 h-5'
  };

  const getLogoColors = () => {
    switch (variant) {
      case 'white':
        return {
          background: 'bg-white/20',
          icon: 'text-white',
          crown: 'bg-white/30',
          crownIcon: 'text-white'
        };
      case 'gradient':
        return {
          background: 'bg-gradient-to-br from-purple-600 to-purple-800',
          icon: 'text-white',
          crown: 'bg-gradient-to-br from-orange-400 to-orange-500',
          crownIcon: 'text-white'
        };
      default:
        return {
          background: 'bg-gradient-to-br from-purple-600 to-purple-800',
          icon: 'text-white',
          crown: 'bg-gradient-to-br from-orange-400 to-orange-500',
          crownIcon: 'text-white'
        };
    }
  };

  const getTextColors = () => {
    switch (variant) {
      case 'white':
        return 'text-white';
      case 'gradient':
        return 'bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent';
      default:
        return 'bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent';
    }
  };

  const colors = getLogoColors();
  const textColors = getTextColors();

  return (
    <div className="flex items-center space-x-3">
      {/* Logo Icon */}
      <div className="relative">
        <div className={`
          ${sizeClasses[size]} 
          ${colors.background} 
          rounded-2xl flex items-center justify-center shadow-lg 
          ${animated ? 'transform hover:scale-110 transition-all duration-300 hover:rotate-6' : ''}
        `}>
          <Building2 className={`${iconSizeClasses[size]} ${colors.icon} ${animated ? 'animate-pulse' : ''}`} />
        </div>
        
        {/* Crown Badge */}
        <div className={`
          absolute -top-1 -right-1 
          ${size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-6 h-6' : size === 'lg' ? 'w-8 h-8' : 'w-10 h-10'} 
          ${colors.crown} 
          rounded-full flex items-center justify-center 
          ${animated ? 'animate-bounce' : ''}
        `}>
          <Crown className={`${crownSizeClasses[size]} ${colors.crownIcon}`} />
        </div>

        {/* Sparkle Effect */}
        {animated && (
          <>
            <div className="absolute -top-2 -left-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
            <div className="absolute -bottom-1 -right-2 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
          </>
        )}
      </div>

      {/* Logo Text */}
      {showText && (
        <div className="space-y-1">
          <h1 className={`
            ${textSizeClasses[size]} 
            font-bold 
            ${textColors}
            ${animated ? 'animate-pulse' : ''}
          `}>
            EMPBriDGe
          </h1>
          
          {size !== 'sm' && (
            <div className="flex items-center space-x-1">
              <Zap className={`w-3 h-3 ${variant === 'white' ? 'text-white/70' : 'text-purple-600'}`} />
              <span className={`text-xs font-medium ${variant === 'white' ? 'text-white/70' : 'text-purple-600'}`}>
                Employer Platform
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// Additional logo variants for different use cases
export function EMPBriDGeLogoMini({ animated = true }: { animated?: boolean }) {
  return (
    <div className="relative">
      <div className={`
        w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl 
        flex items-center justify-center shadow-lg
        ${animated ? 'transform hover:scale-110 transition-all duration-300' : ''}
      `}>
        <Building2 className="w-5 h-5 text-white" />
      </div>
      <div className={`
        absolute -top-1 -right-1 w-4 h-4 
        bg-gradient-to-br from-orange-400 to-orange-500 rounded-full 
        flex items-center justify-center
        ${animated ? 'animate-bounce' : ''}
      `}>
        <Crown className="w-2 h-2 text-white" />
      </div>
    </div>
  );
}

export function EMPBriDGeLogoText({ size = 'md', animated = true }: { size?: 'sm' | 'md' | 'lg'; animated?: boolean }) {
  const textSizes = {
    sm: 'text-xl',
    md: 'text-3xl',
    lg: 'text-5xl'
  };

  return (
    <div className="flex items-center space-x-2">
      <span className={`
        ${textSizes[size]} font-bold 
        bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 
        bg-clip-text text-transparent
        ${animated ? 'animate-pulse' : ''}
      `}>
        EMPBriDGe
      </span>
      <Crown className={`
        ${size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-6 h-6' : 'w-8 h-8'} 
        text-orange-500
        ${animated ? 'animate-bounce' : ''}
      `} />
    </div>
  );
}