import React, { useState, useEffect } from 'react';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

export interface ToastProps {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
  duration?: number;
  onClose: (id: string) => void;
}

const Toast: React.FC<ToastProps> = ({ 
  id, 
  message, 
  type, 
  duration = 5000, 
  onClose 
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      onClose(id);
    }, 300);
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5" />;
      case 'error':
        return <AlertCircle className="w-5 h-5" />;
      case 'info':
        return <Info className="w-5 h-5" />;
      default:
        return <Info className="w-5 h-5" />;
    }
  };

  const getStyles = () => {
    const baseStyles = "backdrop-blur-xl border shadow-lg";
    switch (type) {
      case 'success':
        return `${baseStyles} bg-green-500/20 border-green-500/30 text-green-400`;
      case 'error':
        return `${baseStyles} bg-red-500/20 border-red-500/30 text-red-400`;
      case 'info':
        return `${baseStyles} bg-cyan-500/20 border-cyan-500/30 text-cyan-400`;
      default:
        return `${baseStyles} bg-gray-500/20 border-gray-500/30 text-gray-400`;
    }
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`
        fixed top-4 right-4 z-50 p-4 rounded-lg max-w-sm w-full
        ${getStyles()}
        ${isExiting ? 'animate-slide-out-right' : 'animate-slide-in-right'}
      `}
      role="alert"
      aria-live="polite"
    >
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          {getIcon()}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium leading-relaxed">
            {message}
          </p>
        </div>
        <button
          onClick={handleClose}
          className="flex-shrink-0 ml-2 text-gray-400 hover:text-white transition-colors"
          aria-label="Fermer la notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Toast;