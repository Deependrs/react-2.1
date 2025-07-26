import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [count, setCount] = useState(0);
  const [decrementCount, setDecrementCount] = useState(0);

  // 🛠️ useEffect to prevent decrementCount from going below 0
  useEffect(() => {
    if (decrementCount < 0) {
      setDecrementCount(0);
    }
  }, [decrementCount]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 p-4">
        <h2 className="text-xl font-semibold mb-4">Counter: {count}</h2>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
        >
          Increment
        </button>
      </main>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 bg-gradient-to-t to-violet-600 gap-4">
        <h1 className="text-3xl font-bold bg-gradient-to-t from-blue-500 to-purple-500 text-transparent bg-clip-text">
          Hello, Vite + React!
        </h1>
        <p className="text-xl text-gray-800">Decrement Count: {decrementCount}</p>

        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Increment
        </button>

        <button
          onClick={() => setDecrementCount(decrementCount - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Decrement
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default App;
