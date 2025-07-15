import React, { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 80,
  placeholder = 'blur',
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer pour lazy loading
  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Génération des URLs optimisées
  const generateOptimizedUrl = (format: 'webp' | 'original' = 'original') => {
    // Pour Pexels, on peut ajouter des paramètres d'optimisation
    if (src.includes('pexels.com')) {
      const baseUrl = src.split('?')[0];
      const params = new URLSearchParams({
        auto: 'compress',
        cs: 'tinysrgb',
        w: width.toString(),
        h: height.toString(),
        fit: 'crop',
        q: quality.toString()
      });
      
      if (format === 'webp') {
        params.set('fm', 'webp');
      }
      
      return `${baseUrl}?${params.toString()}`;
    }
    
    // Pour d'autres sources, retourner l'URL originale
    return src;
  };

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Placeholder pendant le chargement
  const renderPlaceholder = () => {
    if (placeholder === 'empty') return null;
    
    return (
      <div 
        className={`absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-[length:200%_100%] animate-pulse ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        } transition-opacity duration-300`}
        style={{ width, height }}
      />
    );
  };

  // Image d'erreur
  const renderErrorFallback = () => (
    <div 
      className={`flex items-center justify-center bg-gray-800 text-gray-400 ${className}`}
      style={{ width, height }}
    >
      <div className="text-center">
        <div className="text-2xl mb-2">📷</div>
        <div className="text-sm">Image non disponible</div>
      </div>
    </div>
  );

  if (hasError) {
    return renderErrorFallback();
  }

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {renderPlaceholder()}
      
      {isInView && (
        <picture>
          {/* Source WebP pour les navigateurs compatibles */}
          <source 
            srcSet={generateOptimizedUrl('webp')} 
            type="image/webp" 
          />
          
          {/* Fallback image classique */}
          <img
            ref={imgRef}
            src={generateOptimizedUrl()}
            alt={alt}
            width={width}
            height={height}
            className={`
              w-full h-full object-cover transition-opacity duration-300
              ${isLoaded ? 'opacity-100' : 'opacity-0'}
            `}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={priority ? "high" : "low"}
            onLoad={handleLoad}
            onError={handleError}
          />
        </picture>
      )}
    </div>
  );
};

// Hook pour précharger les images critiques
export const useImagePreload = (src: string) => {
  useEffect(() => {
    const img = new Image();
    img.src = src;
  }, [src]);
};

// Composant pour les images de héros (priorité haute)
export const HeroImage: React.FC<Omit<OptimizedImageProps, 'priority'>> = (props) => (
  <OptimizedImage {...props} priority={true} />
);

// Composant pour les images de galerie (lazy loading)
export const GalleryImage: React.FC<OptimizedImageProps> = (props) => (
  <OptimizedImage {...props} priority={false} placeholder="blur" />
);

export default OptimizedImage;