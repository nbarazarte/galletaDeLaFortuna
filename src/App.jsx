import styles from './App.module.css'
import CardPhraseComponent from './components/CardPhraseComponent'
import quotes from './utils/quotes.json'
import getRandomArray from "./utils/getRandomArray"
import { useState } from "react"
function App() {

  const [phrase, setPhrase] = useState(getRandomArray(quotes))
  const [bgcookie, setBgcookie] = useState('')
  const myArray = [1,2,3,4];

  const handlerRandom = () => {
    setPhrase(getRandomArray(quotes));
    setBgcookie(getRandomArray(myArray));
  }

  let bg = styles.cookies__bg1;

  if (bgcookie===1) { bg = styles.cookies__bg1 }
  if (bgcookie===2) { bg = styles.cookies__bg2 }
  if (bgcookie===3) { bg = styles.cookies__bg3 }
  if (bgcookie===4) { bg = styles.cookies__bg4 } 

  return (

    <div className={`${styles.cookies} ${bg}`}>
      <h1>GALLETAS DE LA <br/>FORTUNA </h1>
      <CardPhraseComponent phrase={phrase}/>
      <button className={`${styles.quotes__button}`} onClick={handlerRandom}> Ver otro</button>
    </div>
  )
}

export default App
