import getRandomArray from "../utils/getRandomArray"
import PhraseComponent from "./PhraseComponent"
import { useState } from "react"

const ButtonComponent = ({quote}) => {

  const [phrase, setPhrase] = useState(getRandomArray(quote))

  const handlerRandomQuotes = () => {
    setPhrase(getRandomArray(quote))
  }

  return (
    <div>
      <PhraseComponent phrase={phrase}/>
      <button onClick={handlerRandomQuotes}> Random Quote</button>
    </div>
  )
}

export default ButtonComponent