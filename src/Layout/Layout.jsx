import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import MyNav from "../components/MyNav";
import styles from "./Layout.module.css";

const Layout = () => {
    const [completedNotes, setCompletedNotes] = useState([])

    const [notifications, setNotifications] = useState({
        find: '',
        in: '',
        today: 0,
        next: '',
        fil: '',
        completed: 0
    })

    useEffect(() => {
        if (localStorage.getItem('completed')) {
            setCompletedNotes(JSON.parse(localStorage.getItem('completed')).completedNotes)
            setNotifications(prev => {return {...prev, completed: JSON.parse(localStorage.getItem('completed')).notifications}})
         }
        else {
            const completed = {
                completedNotes: [],
                notifications: 0
            }
            localStorage.setItem('completed', JSON.stringify(completed))
        }
    }, [])

    return (
        <div className={styles.div}>
            <MyNav notifications={notifications} />
            <div className={styles.outlet}>
                <Outlet context={{completedNotes, setCompletedNotes, notifications, setNotifications}} />
            </div>
        </div>
    );
};

export default Layout;
