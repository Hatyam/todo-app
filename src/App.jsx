import React from "react";
import MyNav from "./components/MyNav";
import Today from "./pages/Today/Today";
import styles from "./App.module.css";
import AppRouter from "./router/AppRouter";
import { BrowserRouter, Router } from "react-router-dom";

function App() {
    return (
        <div className={styles.div}>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </div>
    );
}

export default App;
