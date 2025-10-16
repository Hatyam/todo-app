import React from 'react'
import styles from './NavChapter.module.css'

const NavChapter = ({imgSrc, buttonAssignment, notification}) => {
  return (
    <button type='button' className={styles.navChapter}>
        <div className={styles.navLeft}>
            <img src={imgSrc}></img>
            <div className={styles.navText}>
                <span>
                    {buttonAssignment}
                </span>
            </div>
        </div>
        <div className={styles.notification}>
            {notification}
        </div>
    </button>
  )
}

export default NavChapter