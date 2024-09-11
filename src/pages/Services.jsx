import styles from "./Page.module.css";

const Services = () => {
  return (
    <div className={styles.servicesWrapper}>
      <div className={styles.servicesTextImg}>
        <img src="./assets/imgs/Frame18565.png" alt="" />
      </div>

      <div className={styles.servicesCards}>
        <div className={styles.servicesCardsLine1}>
            <img src="./assets/imgs/cards2.png" alt="" /> <img src="./assets/imgs/bike.png" alt="" />

        </div>

        <div className={styles.servicesCardsLine2}>

            <img src="./assets/imgs/Frame18562.png" alt="" /> <img src="./assets/imgs/cards1.png" alt="" /> 
        </div>
      </div>
    </div>
  );
};

export default Services;
