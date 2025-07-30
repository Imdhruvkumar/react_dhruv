// App.jsx
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('olive');

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      {/* bottom fixed box */}
      <div className=" bottom-12 left-0 right-0 flex justify-center">
        <div className="bg-white text-black px-4 py-2 rounded shadow">
          test
        </div>
      </div>
    </div>
  );
}

export default App;


