import React from "react";
import CompletedNote from "./CompletedNote";
import styles from './CompletedNotes.module.css'

const CompletedNotes = ({notes}) => {
    return (
        <div className={styles.div}>
            {
                notes.map(el => <CompletedNote key={el.id} noteDescription={el.noteDescription} noteDate={el.noteDate} />)
            }
        </div>
    );
};

export default CompletedNotes;
