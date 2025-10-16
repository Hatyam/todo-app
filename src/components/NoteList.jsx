import React from "react";
import Note from "./Note";
import styles from './NoteList.module.css'

const NoteList = ({notes, removeNote}) => {
    return (
        <div className={styles.div}>
            {
                notes.map(el => <Note key={el.id} remove={removeNote} noteDescription={el.noteDescription} noteDate={el.noteDate} post={el} />)
            }
        </div>
    );
};

export default NoteList;
