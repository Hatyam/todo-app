import React from 'react'
import NavChapter from './NavChapter'
import plus from '../assets/icons/plus.png'
import question from '../assets/icons/question.png'
import styles from './NavBottom.module.css'

const NavBottom = () => {
  return (
    <div className={styles.navBottom}>
        <NavChapter imgSrc={plus} buttonAssignment='Добавить команду' notification='' />
        <NavChapter imgSrc={question} buttonAssignment='Поддержка и ресурсы' notification='' />
    </div>
  )
}

export default NavBottom