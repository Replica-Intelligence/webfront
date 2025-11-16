'use client';

import { useEffect } from 'react';

interface ViewTrackerProps {
  slug: string;
}

export default function ViewTracker({ slug }: ViewTrackerProps) {
  useEffect(() => {
    // Increment view count when article is loaded
    const incrementView = async () => {
      try {
        await fetch(`/api/articles/${slug}/increment-view`, {
          method: 'POST',
        });
      } catch (error) {
        console.error('Error incrementing view:', error);
      }
    };

    incrementView();
  }, [slug]);

  return null; // This component doesn't render anything
}
