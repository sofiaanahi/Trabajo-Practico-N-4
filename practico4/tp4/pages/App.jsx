import { useState } from 'react'
import "./_app.js"
import { ListaPokemon } from '../components/ListaPokemon.jsx'

function App() {
  

  return (
    <>
    <div className='App'>
    <header className="App-header">
        <ListaPokemon/>
      </header>
    </div>

    </>
  )
}

export default App