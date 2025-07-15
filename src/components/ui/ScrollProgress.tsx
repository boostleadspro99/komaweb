import React, { useState, useEffect } from 'react';

interface ScrollProgressProps {
  className?: string;
  height?: string;
  showPercentage?: boolean;
  color?: 'gradient' | 'cyan' | 'magenta';
}

const ScrollProgress: React.FC<ScrollProgressProps> = ({
  className = '',
  height = 'h-1',
  showPercentage = false,
  color = 'gradient'
}) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      const scrolled = window.scrollY;
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxHeight > 0 ? (scrolled / maxHeight) * 100 : 0;
      
      setProgress(Math.min(100, Math.max(0, progress)));
      setIsVisible(scrolled > 100); // Afficher après 100px de scroll
    };

    // Throttle pour optimiser les performances
    let ticking = false;
    const throttledUpdate = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledUpdate, { passive: true });
    window.addEventListener('resize', updateProgress);
    
    // Initial call
    updateProgress();

    return () => {
      window.removeEventListener('scroll', throttledUpdate);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  const getColorClasses = () => {
    switch (color) {
      case 'gradient':
        return 'bg-gradient-to-r from-cyan-500 via-magenta-500 to-red-500';
      case 'cyan':
        return 'bg-cyan-500';
      case 'magenta':
        return 'bg-magenta-500';
      default:
        return 'bg-gradient-to-r from-cyan-500 via-magenta-500 to-red-500';
    }
  };

  return (
    <>
      {/* Barre de progression principale */}
      <div 
        className={`
          fixed top-0 left-0 w-full ${height} bg-gray-900/50 backdrop-blur-sm z-50 
          transition-opacity duration-300
          ${isVisible ? 'opacity-100' : 'opacity-0'}
          ${className}
        `}
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Progression de lecture: ${Math.round(progress)}%`}
      >
        <div 
          className={`
            ${height} ${getColorClasses()} 
            transition-all duration-150 ease-out
            shadow-lg shadow-cyan-500/20
          `}
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Indicateur de pourcentage (optionnel) */}
      {showPercentage && isVisible && (
        <div className="fixed top-4 right-4 z-50 bg-black/80 backdrop-blur-sm text-cyan-400 px-3 py-1 rounded-full text-sm font-medium border border-cyan-500/30">
          {Math.round(progress)}%
        </div>
      )}
    </>
  );
};

// Hook personnalisé pour obtenir le progrès de scroll
export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrolled = window.scrollY;
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxHeight > 0 ? (scrolled / maxHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, progress)));
    };

    let ticking = false;
    const throttledUpdate = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledUpdate, { passive: true });
    window.addEventListener('resize', updateProgress);
    updateProgress();

    return () => {
      window.removeEventListener('scroll', throttledUpdate);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return progress;
};

// Composant pour afficher le progrès dans la navigation
export const NavScrollProgress: React.FC = () => {
  const progress = useScrollProgress();
  
  return (
    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800">
      <div 
        className="h-full bg-gradient-to-r from-cyan-500 to-magenta-500 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;