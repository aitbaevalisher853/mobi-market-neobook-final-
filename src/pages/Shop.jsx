import React from 'react'
import styles from "../assets/styles/shop.module.css"
import carImg from "../assets/img/bmwM4.png"
import shoes from  "../assets/img/nike.png"
import ReactCarousel from "react-bootstrap/Carousel";
import basket from "../assets/img/shopping.png"


class App extends React.Component {
    state = {
      items: [
        {
          title: "BMW M4 Coupe",
          price: 23000,
          image: {carImg},
        },
        {
          title: "Adidas Yeezy 500",
          price: 100,
          image: {shoes},
        },
      ],
    };
  
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
          <ReactCarousel>
            {this.state.items.map((item) => (
              <div key={item.title}>
                <img src={item.image} alt={item.title} />
                <h2>{item.title}</h2>
                <p>{item.price}</p>
              </div>
            ))}
          </ReactCarousel>
        </div>
      );
    }
  }
  
  export default App;
 
