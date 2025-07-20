import React from 'react'
import './App.css'
import { Chat } from './components/organisms/Chat'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-start justify-center pt-12">
      <div className="bg-white rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to HeyChat</h1>
        <Chat />
      </div>
    </div>
  )
}

export default App
