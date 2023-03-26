import styles from '../App.module.css'
const PhraseComponent = ({phrase}) => {

  return (
    <p>             
        {phrase.phrase}  
        <span className={`${styles.quotationMarks}`}>"</span>              
    </p>
  )
}

export default PhraseComponent