// Google Analytics 4 integration
export const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with actual GA4 ID

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const event = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  event('form_submit', 'engagement', formName);
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location: string) => {
  event('click', 'engagement', `${buttonName}_${location}`);
};

// Track scroll depth
export const trackScrollDepth = (depth: number) => {
  event('scroll', 'engagement', `${depth}%`);
};

// Performance monitoring
export const trackPerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      
      event('page_load_time', 'performance', 'load_time', Math.round(loadTime));
    });
  }
};

// Error tracking
export const trackError = (error: Error, errorInfo?: any) => {
  event('exception', 'error', error.message);
  console.error('Application Error:', error, errorInfo);
};

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}