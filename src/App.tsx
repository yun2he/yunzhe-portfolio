import { useState, useEffect } from 'react';
import { LoadingScreen } from './components/ui/LoadingScreen';
import { PixelCodexLanding } from './components/sections/PixelCodexLanding';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return <PixelCodexLanding />;
}

export default App;
