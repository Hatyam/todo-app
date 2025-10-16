import { React,  } from "react";
import round from "../assets/icons/empty.png";
import calendarNote from "../assets/icons/calendarNote.png";
import styles from "./Note.module.css";
import check from "../assets/icons/check.png";

const CompletedNote = ({ noteDescription, noteDate }) => {
    return (
        <div className={styles.note}>
            <div className={styles.noteDescription}>
                <img src={check} className={`${styles.checkmark} ${styles.visibleCheckmark}`}></img>
                <img
                    className={styles.round}
                    src={round}
                ></img>
                <span>{noteDescription}</span>
            </div>
            <div className={styles.noteDate}>
                <img className={styles.calendarNote} src={calendarNote}></img>
                <span>{noteDate}</span>
            </div>
        </div>
    );
};

export default CompletedNote;
