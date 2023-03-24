import './App.css'
import ButtonComponent from './components/ButtonComponent'
import quotes from './utils/quotes.json'

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
