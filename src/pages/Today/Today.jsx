import React, { useState, useEffect } from "react";
import TodayHeader from "../../components/Header";
import Note from "../../components/Note";
import NoteList from "../../components/NoteList";
import NewNote from "../../components/NewNote";
import { useOutletContext } from "react-router-dom";

const Today = () => {
    const {setCompletedNotes, setNotifications} = useOutletContext()

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        // localStorage.clear()
        if (localStorage.getItem('today')) {
            setNotes(JSON.parse(localStorage.getItem('today')).notes)
            setNotifications(prev => {return {...prev, today:JSON.parse(localStorage.getItem('today')).notifications}})
        }
        else {
            const today = {
                notes: [],
                notifications: 0
            }
            localStorage.setItem('today', JSON.stringify(today))
        }
    }, [])

    const removeNote = (post) => {
        setNotifications(prev => {return {...prev, today: prev.today - 1, completed: prev.completed + 1}})
        setCompletedNotes(prev => [...prev, notes.find(el => el.id === post.id)])
        setNotes(prev => [...prev].filter((p) => p.id != post.id));

        const newNotesLS = JSON.parse(localStorage.getItem('today')).notes.filter((el) => el.id !== post.id)
        const newNotificationsLS = JSON.parse(localStorage.getItem('today')).notifications - 1
        const newToday = {notes: newNotesLS, notifications: newNotificationsLS}
        localStorage.setItem('today', JSON.stringify(newToday))

        const newCompletedNotes = JSON.parse(localStorage.getItem('completed')).completedNotes
        newCompletedNotes.push({id: Date.now(), noteDescription: post.noteDescription, noteDate: post.noteDate})
        const newCompletedNotesNotifications = JSON.parse(localStorage.getItem('completed')).notifications + 1
        const newCompleted = {completedNotes: newCompletedNotes, notifications: newCompletedNotesNotifications}
        localStorage.setItem('completed', JSON.stringify(newCompleted))
    };

    const addNewNote = (description, date) => {
        setNotifications(prev => {return {...prev, today: prev.today + 1}})
        setNotes((prev) =>
            [
                ...prev,
                {
                    id: Date.now(),
                    noteDescription: description,
                    noteDate: date,
                },
            ].sort((a, b) => a.noteDate.localeCompare(b.noteDate))
        );

        const newNotesLS = JSON.parse(localStorage.getItem('today')).notes
        newNotesLS.push({id: Date.now(), noteDescription: description, noteDate: date})
        const newNotificationsLS = JSON.parse(localStorage.getItem('today')).notifications + 1
        const newToday = {notes: newNotesLS, notifications: newNotificationsLS}
        localStorage.setItem('today', JSON.stringify(newToday))
    };

    return (
        <div>
            <TodayHeader headerText="Сегодня" taskNumber={notes.length}></TodayHeader>
            <NoteList notes={notes} removeNote={removeNote} />
            <NewNote add={addNewNote} />
        </div>
    );
};

export default Today;
