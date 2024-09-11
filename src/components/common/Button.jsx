/* eslint-disable react/prop-types */
import styles from "./Button.module.css"
const Button = ({text}) => {
  return (
    <div className={styles.mainBtn}>
      <button className={styles.btn}>{text}</button>
    </div>
  )
}

export default Button
