import React from "react";
import styles from "./navbar.module.css"
import LogoImage from "../../assets/Group 8.png"


export default function Navbar(){
    return (
       <div className={styles.navbar}>
        <div className={styles.logo}>
            <img src={LogoImage} alt="" />
        </div>
        <div className={styles.anchor}>
            <a href="/">Find Doctors</a>
            <a href="/">Hospitals</a>
            <a href="/">Medicines</a>
            <a href="/">Surgeries</a>
            <a href="/">Software for Provider</a>
            <a href="/">Facilities</a>
            <a href="/" className={styles.btn}>My Bookings</a>
        </div>
       </div>
  );
    
}