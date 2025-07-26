import React, { useState } from "react";
import Header from "./Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-4">
        <h2 className="text-xl font-semibold mb-4">Counter: {count}</h2>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Increment
        </button>
      </main>

      {/* ये वाला div पहले main के अंदर था, जो गलती थी */}
      <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-gradient-to-t to-violet-600">
        <h1 className="text-3xl font-bold bg-gradient-to-t from-blue-500 to-purple-500 text-transparent bg-clip-text">
          Hello, Vite + React!
        </h1>
      </div>
    </div>
  );
}

export default App;
