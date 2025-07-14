import React from 'react';
import { Zap } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-purple-900" role="status" aria-label="Chargement en cours">
      <div className="text-center">
        <div className="relative">
          <Zap className="w-16 h-16 text-cyan-400 mx-auto" style={{ animation: 'pulse 2s infinite' }} />
          <div className="absolute inset-0 w-16 h-16 mx-auto border-4 border-transparent border-t-magenta-400 rounded-full" style={{ animation: 'spin 1s linear infinite' }}></div>
        </div>
        <p className="mt-4 text-gray-300 text-lg" aria-live="polite">Chargement...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;