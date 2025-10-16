import React from "react";
import styles from './NavTop.module.css'
import user from '../assets/icons/user.png'
import bell from "../assets/icons/bell.png"
import sidebar from "../assets/icons/sidebar.png"

const NavTop = () => {
    return (
        <div className={styles.navTop}>
            <div>
                <img src={user}></img>
            </div>
            <div className={styles.button}>
                <div>
                    <img src={bell}></img>
                </div>
                <div>
                    <img src={sidebar}></img>
                </div>
            </div>
        </div>
    );
};

export default NavTop;
