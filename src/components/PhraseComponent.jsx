const PhraseComponent = ({phrase}) => {



  return (
    <div>
        <p>
           {phrase.phrase} <br/>
            {phrase.author}
        </p>
    </div>
  )
}

export default PhraseComponent