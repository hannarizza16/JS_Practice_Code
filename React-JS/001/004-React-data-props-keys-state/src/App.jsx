import { useState } from 'react'
import Props from './components/Props'
import UseStateNumber from './components/UseStateNumber'
import './App.css'

function App() {
  
  const players = [
    {id: 1, playerName: 'Stephen Curry', points: 12, assists: 4, rebounds: 6},
    {id: 2, playerName: 'Kevin Durant', points: 20, assists: 5, rebounds: 7},
    {id: 3, playerName: 'Klay Thompson', points: 15, assists: 3, rebounds: 4},
    {id: 4, playerName: 'Draymond Green', points: 8, assists: 7, rebounds: 10},
    {id: 5, playerName: 'Andrew Wiggins', points: 18, assists: 2, rebounds: 5},
  ]

  return (
    <>
      <h1>React Data</h1>
      <h2>Props and useState</h2>
      <div className='props-container'>
        {players.map(({id, playerName, points, assists, rebounds}) => (
          <Props key={id}{...{id, playerName, points, assists, rebounds}} />
        ))}
      </div>
      <UseStateNumber />
    </>
  )
}

export default App
