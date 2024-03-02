import { useEffect } from 'react';

interface RefreshOnPathChangeProps {
    targetPath: string
}

const RefreshOnPathChange = ({ targetPath } : RefreshOnPathChangeProps) => {
  useEffect(() => {
    const handlePathChange = () => {
      if (window.location.pathname === targetPath) {
        window.location.reload(); // Refresh the page
      }
    };

    // Add event listener to listen for URL changes
    window.addEventListener('popstate', handlePathChange);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('popstate', handlePathChange);
    };
  }, [targetPath]);

  return null; // This component doesn't render anything
};

export default RefreshOnPathChange;