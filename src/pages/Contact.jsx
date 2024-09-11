import Button from "../components/common/button";
import styles from "./Page.module.css";


const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contactLeft}>
        <h1>Subscribe our newsletter</h1>
        <p>Browse local restaurants and businesses for delivery by entering your address blow.</p>
      </div>
      <div className={styles.contactRight}>
        <input type="text" placeholder="Enter your email address" /><Button text="send"/>
      </div>

    </div>
  )
}

export default Contact
