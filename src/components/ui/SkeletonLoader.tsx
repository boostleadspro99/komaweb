import React from 'react';

interface SkeletonLoaderProps {
  variant?: 'text' | 'card' | 'avatar' | 'image' | 'button' | 'custom';
  width?: string;
  height?: string;
  className?: string;
  lines?: number;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  variant = 'text',
  width,
  height,
  className = '',
  lines = 3
}) => {
  const baseClasses = 'animate-pulse bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-[length:200%_100%] rounded';

  const getVariantClasses = () => {
    switch (variant) {
      case 'text':
        return 'h-4 w-full';
      case 'card':
        return 'h-48 w-full';
      case 'avatar':
        return 'h-12 w-12 rounded-full';
      case 'image':
        return 'h-32 w-full';
      case 'button':
        return 'h-10 w-24';
      case 'custom':
        return '';
      default:
        return 'h-4 w-full';
    }
  };

  const style = {
    width: width || undefined,
    height: height || undefined,
  };

  if (variant === 'text' && lines > 1) {
    return (
      <div className={`space-y-3 ${className}`}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`${baseClasses} ${getVariantClasses()}`}
            style={{
              ...style,
              width: index === lines - 1 ? '75%' : '100%'
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`${baseClasses} ${getVariantClasses()} ${className}`}
      style={style}
    />
  );
};

// Composants pré-configurés pour des cas d'usage courants
export const SkeletonCard: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`space-y-4 p-6 ${className}`}>
    <SkeletonLoader variant="image" height="200px" />
    <SkeletonLoader variant="text" width="60%" />
    <SkeletonLoader variant="text" lines={3} />
    <div className="flex space-x-2">
      <SkeletonLoader variant="button" />
      <SkeletonLoader variant="button" />
    </div>
  </div>
);

export const SkeletonProfile: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex items-center space-x-4 ${className}`}>
    <SkeletonLoader variant="avatar" />
    <div className="flex-1 space-y-2">
      <SkeletonLoader variant="text" width="40%" />
      <SkeletonLoader variant="text" width="60%" />
    </div>
  </div>
);

export const SkeletonList: React.FC<{ items?: number; className?: string }> = ({ 
  items = 5, 
  className = '' 
}) => (
  <div className={`space-y-4 ${className}`}>
    {Array.from({ length: items }).map((_, index) => (
      <div key={index} className="flex items-center space-x-4">
        <SkeletonLoader variant="avatar" width="40px" height="40px" />
        <div className="flex-1 space-y-2">
          <SkeletonLoader variant="text" width="30%" />
          <SkeletonLoader variant="text" width="80%" />
        </div>
      </div>
    ))}
  </div>
);

export default SkeletonLoader;