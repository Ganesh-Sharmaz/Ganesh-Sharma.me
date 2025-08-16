'use client';

import { useEffect } from 'react';

const faviconUrls = [
  "https://cutekawaiiresources.wordpress.com/wp-content/uploads/2016/11/keroppi-bullet-2.gif",
  "https://cutekawaiiresources.wordpress.com/wp-content/uploads/2016/11/kuromi-bullet-9.gif",
  "https://cutekawaiiresources.wordpress.com/wp-content/uploads/2016/11/kuromi-bullet-10.gif",
  "https://cutekawaiiresources.wordpress.com/wp-content/uploads/2016/11/kuromi-bullet-12.gif",
  "https://cutekawaiiresources.wordpress.com/wp-content/uploads/2016/11/kuromi-3.gif",
  "https://cutekawaiiresources.wordpress.com/wp-content/uploads/2016/11/kuromi-4.gif",
  "https://cutekawaiiresources.wordpress.com/wp-content/uploads/2016/11/kuromi-5.gif",
  "https://cutekawaiiresources.wordpress.com/wp-content/uploads/2016/11/kuromi-7.gif",
  "https://cutekawaiiresources.wordpress.com/wp-content/uploads/2016/11/kuromi-10.gif",
  "https://cutekawaiiresources.wordpress.com/wp-content/uploads/2016/11/kuromi-11.gif",
  "https://cutekawaiiresources.wordpress.com/wp-content/uploads/2016/11/kuromi-bullet-1.gif",
  "https://cutekawaiiresources.wordpress.com/wp-content/uploads/2016/11/kuromi-6.gif",
];

export default function DynamicFavicon() {
  useEffect(() => {
    let currentIndex = Math.floor(Math.random() * faviconUrls.length);

    // Function to update the favicon
    const updateFavicon = (url: string) => {
      // Remove existing favicon
      const existingFavicon = document.querySelector('link[rel="icon"]');
      if (existingFavicon) {
        existingFavicon.remove();
      }

      // Create new favicon link
      const link = document.createElement('link');
      link.rel = 'icon';
      link.href = url;
      document.head.appendChild(link);
    };

    // Set initial random favicon
    updateFavicon(faviconUrls[currentIndex]);

    // Set up interval to change favicon every 10 seconds
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % faviconUrls.length;
      updateFavicon(faviconUrls[currentIndex]);
    }, 10000); // 10 seconds

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return null;
}