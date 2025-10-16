import React, { } from "react";
import Header from "../../components/Header";
import { useOutletContext } from "react-router-dom";
import CompletedNotes from "../../components/CompletedNotes";

const Complete = () => {
    const { completedNotes } = useOutletContext()

    return (
        <div>
            <Header headerText="Выполненные задачи" taskNumber={completedNotes.length} />
            <CompletedNotes notes={completedNotes} />
        </div>
    );
};

export default Complete;
