import React from "react";
import DoctorImg from "../../assets/NicePng_doctor-png_336282 1.png"
import Tag from "../../assets/tag_hero.png"
import styles from "./hero.module.css"

export default function Hero(){
    return (
        <div className={styles.hero}>
            <div>
                <img src={Tag} alt="" />
            </div>
            <div>
                <img src={DoctorImg} alt="" />
            </div>
        </div>
    )
}