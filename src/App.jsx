import { useState } from 'react'
import './App.css'
import ButtonComponent from './components/ButtonComponent'
import PhraseComponent from './components/PhraseComponent'
import quotes from './utils/quotes.json'
import getRandomArray from './utils/getRandomArray'

function App() {

//console.log(getRandomArray(quotes));

  return (
    <div className="App">
      <h1>Quotes Random</h1>

      <ButtonComponent quote={quotes}/>
      
    </div>
  )
}

export default App
