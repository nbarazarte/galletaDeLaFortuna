import PhraseComponent from "./PhraseComponent"
import styles from '../App.module.css'
const ButtonComponent = ({phrase}) => {

  return (
    <div className={styles.quotes}>

      <blockquote className={`${styles.quotes__phrase}`}>
     
        <PhraseComponent phrase={phrase}/> 
     
      </blockquote>

    </div>
    
  )
}

export default ButtonComponent
