import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [health, setHealth] = useState('Loading...')

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await fetch('/api/health')
        const data = await response.json()
        setHealth(data.message)
      } catch (error) {
        console.error('Error:', error)
        setHealth('Error connecting to backend')
      }
    }

    checkHealth()
  }, [])

  return (
    <div className="container">
      <h1>Flask + React + Vite App</h1>
      <div className="card">
        <p>Backend Health Status: <span className="status">{health}</span></p>
      </div>
    </div>
  )
}

export default App