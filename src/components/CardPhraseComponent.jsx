import PhraseComponent from "./PhraseComponent"
import styles from '../App.module.css'
const ButtonComponent = ({phrase}) => {

  return (
    <div className={styles.quotes}>

      <div className={`${styles.quotes} ${styles.quotes__phrase}`}>
        <PhraseComponent phrase={phrase}/>      
      </div>

    </div>
  )
}

export default ButtonComponent
