import React from 'react';
import { Zap } from 'lucide-react';
import SkeletonLoader from './ui/SkeletonLoader';

const LoadingScreen: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-purple-900 container-padding" role="status" aria-label="Chargement en cours">
      <div className="text-center content-spacing max-w-md w-full">
        <div className="relative">
          <Zap className="w-16 h-16 text-cyan-400 mx-auto animate-glow-pulse" />
          <div className="absolute inset-0 w-16 h-16 mx-auto border-4 border-transparent border-t-magenta-400 rounded-full" style={{ animation: 'spin 1s linear infinite' }}></div>
        </div>
        <p className="mt-4 text-gray-300 text-lg" aria-live="polite">Chargement...</p>
        
        {/* Skeleton preview du contenu */}
        <div className="mt-8 space-y-4">
          <SkeletonLoader variant="text" width="80%" />
          <SkeletonLoader variant="text" width="60%" />
          <SkeletonLoader variant="button" className="mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;