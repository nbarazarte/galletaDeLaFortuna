import styles from '../App.module.css'
const PhraseComponent = ({phrase}) => {

  return (
    <>
      <p>             
        {phrase.phrase}          
      </p> 
      <span className={`${styles.quotationMarks}`}>"</span>    
    </> 
  )
}

export default PhraseComponent