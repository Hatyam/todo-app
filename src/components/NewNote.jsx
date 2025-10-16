import React, { useState } from "react";
import redPlus from "../assets/icons/redPlus.png";
import styles from "./NewNote.module.css";

const NewNote = ({add}) => {
    const [isAdding, setIsAdding] = useState(false)
    
    const [taskDetails, setTaskDetails] = useState({
        description: '',
        time: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        const emptyFields = Object.entries(taskDetails).filter(el => !el[1].trim())
        if (emptyFields.length === 0) {
            add(taskDetails.description, taskDetails.time)
            setIsAdding(false)
            setTaskDetails({description: '', time: ''})
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setTaskDetails((prev) => ({...prev, [name]: value}))
    }

    const isValidForm = Object.entries(taskDetails).filter(el => !el[1].trim()).length

    return ( 
        <div className={styles.newNote}>
            {!isAdding ?
            <div onClick={() => setIsAdding(true)} className={styles.addNote}>
                <img src={redPlus} className={styles.redPlus}></img>
                <span>Добавить задачу</span>
            </div>
            :
            <form onSubmit={handleSubmit}>
                <input name="description" value={taskDetails.description} onChange={handleChange} type="text" className={styles.firstInput} placeholder="Название задачи"></input>
                <input name="time" value={taskDetails.time} onChange={handleChange} type="text" placeholder="Время выполнения"></input>
                <button type="button" onClick={() => {setIsAdding(false); setTaskDetails({description: '', time: ''})}} className={styles.cancel}>Отмена</button>
                <button type="submit" disabled={isValidForm} className={`${styles.add} ${isValidForm ? styles.addNotAllowed : ''}`}>Добавить задачу</button>
            </form>}
        </div>
    );
};

export default NewNote;
