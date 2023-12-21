import React, { useState } from 'react'
import styles from "../assets/styles/auth.module.css"
import basket from "../assets/img/Frame 851212072.png"
import  background from "../assets/img/image 1.png"
import backImg from "../assets/img/backPhoto.png"


function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
   
  };

  return (
    <div  className={styles.container}>
        <div className={styles.images} >
           <img src={background} alt="" />
           <img src={basket} alt="" />
           {/* <img src={backImg} alt="" /> */}
        </div>
       <form onSubmit={'handleSubmit'}>
        <div className={styles.inputBar}>
        <div className={styles.formGroup}>
             <input  
             type="text"
             className={styles.formControl}
             placeholder='Имя пользователя'
             value={username}
             onChange={(e) => setUsername(e.target.value)}
             />
          </div>
          <div className={styles.formGroup}>
          <input
            type="password"
            className={styles.formControl}
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
           <p >
                    <a className={styles.link} href="#">Забыли пароль</a>
                </p>
        </div>
        <button type="login" className={styles.primaryBtn}>Войти</button> <br />
        <p className={styles.top}>
        <a className={styles.register} href="#">Зарегистрироваться</a>
      </p>
        </div>
       </form>
    </div>
  )

}

export default SignIn;