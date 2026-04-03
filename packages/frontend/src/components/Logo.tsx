import { useState, useEffect } from 'react';

export function Logo() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Run animation only once on mount
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`transition-all duration-400 ${animated ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
      <img 
        src="/images/logo.png" 
        alt="Lakhil Raj Welfare Foundation Logo" 
        className="h-12 w-auto object-contain"
      />
    </div>
  );
}
