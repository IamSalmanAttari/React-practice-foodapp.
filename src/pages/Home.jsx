import Button from "../components/common/button";
import About from "./About";
import Contact from "./Contact";
import Order from "./Order";
// import Header from "../components/Header/Header";
import styles from "./Page.module.css";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      {/* <Header /> */}
      <div className={styles.homeWrapper}>
        <div className={styles.homeLeft}>
          <h1>Your Favorite Food Delivery Partner</h1>
          <p><br />
            The food at your doorstep. Why starve when you have us. You hunger
            partner. Straight out of the oven to your doorstep.{" "}
          </p>  <br />
          <Button text="Order Now"/>
          <br />
          <img src="./assets/imgs/google.png" alt="" />{" "} 
          <img src="./assets/imgs/AppStore.png" alt="" />
        </div>
        <div className={styles.homeRight}>
          <img src="./assets/imgs/boy.png" alt="" />
        </div>
      </div>
      <Services/>
      <Order/>
      <About/>
      <Contact/>
    </div>
  );
};

export default Home;
