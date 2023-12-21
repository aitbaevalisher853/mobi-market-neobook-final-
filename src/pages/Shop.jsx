import React from 'react'
import styles from "../assets/styles/shop.module.css"
import carImg from "../assets/img/bmwM4.png"
import shoes from  "../assets/img/nike.png"
import basket from "../assets/img/shopping.png"
import avatar from "../assets/img/avatar.png"


class App extends React.Component {
   
    render() {
      return (
        <div>
           <div className={styles.header}>
          <div className={styles.logo}>
          <img className={styles.basketImg} src={basket} alt="" /> <br />
          <h1 className={styles.txt}>MOBI MARKET</h1>
          </div>
          <div className={styles.auth}>
            <button className={styles.btn}>Подать объявление</button>
            <div className={styles.portfolio} >
                <div className={styles.info}>
                <h3 className={styles.name}>Алеся</h3>
                <h3 className={styles.email}>sergeykrash01</h3>
                </div>
                <img className={styles.avatar} src={avatar} alt="" />
            </div>
          </div>
           </div>
        </div>
      );
    }
  }
  
  export default App;
 
