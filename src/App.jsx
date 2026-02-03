import React from 'react'
import Quote from './components/Quote'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import OfflineIndicator from './components/OfflineIndicator'

function App() {
  return (
    <div>
      <OfflineIndicator />
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Task Motive</h1>
        <p style={{ opacity: 0.8 }}>Organize your life with daily inspiration.</p>
      </header>

      <main>
        <Quote />
        <TaskInput />
        <TaskList />
      </main>
    </div>
  )
}

export default App
