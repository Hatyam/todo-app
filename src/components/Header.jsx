import React from 'react'
import styles from './Header.module.css'
import checkmark from '../assets/icons/check-mark.png'

const TodayHeader = ({headerText, taskNumber}) => {
  return (
    <div className={styles.today}>
        <h2>{headerText}</h2>
        <div className={styles.wrapper}>
            <img className={styles.checkmark} src={checkmark}></img>
            <span className={styles.taskSpan}>{taskNumber} task</span>
        </div>
    </div>
  )
}

export default TodayHeader