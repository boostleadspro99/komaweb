import React from 'react';
import { Zap } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-purple-900">
      <div className="text-center">
        <div className="relative">
          <Zap className="w-16 h-16 text-cyan-400 mx-auto animate-pulse" />
          <div className="absolute inset-0 w-16 h-16 mx-auto border-4 border-transparent border-t-magenta-400 rounded-full animate-spin"></div>
        </div>
        <p className="mt-4 text-gray-300 text-lg">Chargement...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;