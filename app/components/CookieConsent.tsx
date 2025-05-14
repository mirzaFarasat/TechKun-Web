'use client';

import { useState, useEffect } from 'react';

interface CookieConsentProps {
  onAccept?: () => void;
  onReject?: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onAccept, onReject }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show banner if cookieConsent is not "true"
    const hasConsent = localStorage.getItem('cookieConsent') === 'true';
    setIsVisible(!hasConsent);
  }, []);

  useEffect(() => {
    // For testing, force the banner to show
    setIsVisible(true);
  }, []);

  const handleAccept = async () => {
    // Store simple boolean value
    localStorage.setItem('cookieConsent', 'true');

    try {
      await fetch('/api/cookie-consent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ consent: true }),
      });
    } catch (error) {
      console.error('Failed to send consent data:', error);
    }

    setIsVisible(false);
    onAccept?.();
  };

  const handleReject = async () => {
    // Don't store anything in localStorage for reject
    // This way banner will show again on refresh
    localStorage.removeItem('cookieConsent');

    try {
      await fetch('/api/cookie-consent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ consent: false }),
      });
    } catch (error) {
      console.error('Failed to send consent data:', error);
    }

    setIsVisible(false);
    onReject?.();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-4 md:p-6 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600 text-center sm:text-left">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
          <a href="/privacy" className="text-blue-600 hover:text-blue-800 underline ml-1">
            Learn more
          </a>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleReject}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
          >
            Reject
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;