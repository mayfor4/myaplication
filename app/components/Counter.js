'use client'
import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [initialValue, setInitialValue] = useState(0);
  
    const increment = () => {
      setCount(count + 1);
    };
  
    const reset = () => {
      setCount(initialValue);
    };
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contador</h2>
        <p className="text-lg text-gray-700 mb-6">El valor actual es: {count}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4" onClick={increment}>Incrementar</button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={reset}>Reiniciar</button>
      </div>
    );
};

export default Counter;