import React from 'react'
import styles from './MyNav.module.css'
import NavTop from './NavTop.jsx'
import NavChapters from './NavChapters.jsx'
import NavBottom from './NavBottom.jsx'

const MyNav = ( {notifications} ) => {
  return (
    <div className={styles.myNav}>
        <NavTop></NavTop>
        <NavChapters notifications={notifications}></NavChapters>
        <NavBottom></NavBottom>
    </div>
  )
}

export default MyNav