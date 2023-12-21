import React from 'react'
import styles from "../assets/styles/shop.module.css"
import carImg from "../assets/img/bmwM4.png"
import shoes from  "../assets/img/nike.png"
import basket from "../assets/img/shopping.png"


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
          </div>
           </div>

        </div>
      );
    }
  }
  
  export default App;
 
