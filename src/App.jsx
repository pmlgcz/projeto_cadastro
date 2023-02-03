import { useState } from 'react'
import './App.css'
import Create from './components/create'

function App() {

  return (
    <div className="main">
      <h2 className='main-header'>Cadastro SeriesFlix</h2>
      <div>
        <Create/>
      </div>
    </div>
    
  )
}

export default App
