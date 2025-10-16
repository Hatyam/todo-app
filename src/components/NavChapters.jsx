import React from 'react'
import loupe from '../assets/icons/loupe.png'
import folder from '../assets/icons/folder.png'
import calendar from '../assets/icons/calendar.png'
import calendar2 from '../assets/icons/calendar2.png'
import filter from '../assets/icons/four-squares-button-of-view-options.png'
import checkmark from '../assets/icons/check-mark.png'
import NavChapter from './NavChapter.jsx'
import styles from './NavChapters.module.css'
import { Link } from 'react-router-dom'

const NavChapters = ( {notifications} ) => {

  return (
    <div className={styles.navChapters}>
        <NavChapter imgSrc={loupe} buttonAssignment='Поиск' notification='' />
        <NavChapter imgSrc={folder} buttonAssignment='Входящие' notification='' />
        <Link style={{textDecoration: 'none'}} to="/">
            <NavChapter imgSrc={calendar} buttonAssignment='Сегодня' notification={notifications.today} />
        </Link>
        <NavChapter imgSrc={calendar2} buttonAssignment='Предстоящее' notification='' />
        <NavChapter imgSrc={filter} buttonAssignment='Фильтры и метки' notification='' />
        <Link style={{textDecoration: "none"}} to="Complete">
            <NavChapter imgSrc={checkmark} buttonAssignment='Выполнено' notification={notifications.completed} />
        </Link>
    </div>
  )
}

export default NavChapters