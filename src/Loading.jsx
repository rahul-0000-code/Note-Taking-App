import React, { useState, useEffect } from 'react';
import { Ring } from 'react-awesome-spinners';

const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for demonstration purposes (remove this in actual use)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Clear the timer on unmount (cleanup)
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      {loading && <Ring />} {/* Render the spinner if loading is true */}
      {loading && <p style={{ marginTop: '20px', color: '#555', fontSize: '16px' }}>Loading...</p>} {/* Text below the spinner */}
    </div>
  );
};

export default Loading;
