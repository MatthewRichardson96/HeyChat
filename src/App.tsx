import { useState } from 'react'
import './App.css'
import { Chat } from './components/Chat'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to HeyChat</h1>
        <p className="text-gray-600 mb-6">
          A modern chat application built with React, TypeScript, and Tailwind CSS
        </p>
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          count is set to {count}
        </button>
        <p className="mt-4 text-sm text-gray-500">
          Edit <code className="font-mono bg-gray-100 p-1 rounded">src/App.tsx</code> and save to test HMR
        </p>
        <Chat />
      </div>
    </div>
  )
}

export default App
