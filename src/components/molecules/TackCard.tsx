import React from 'react';
import { TaskCard } from '../../types/taskBoard';

interface Props {
    task: TaskCard
    handleOnModalOpend: Function
    handleOnSetSelectedTask: Function
}
export const TackCard: React.FC<Props> = props => {
    const styleCard = {
        background: "#2A3B57",
        padding: "15px 10px",
        borderRadius: "10px",
        cursor: "pointer",
        boxShadow: "0px -1px 8px #00000036",
        marginBottom: 15,
        fontSize: 15,
    };
    const styleTitle = {
        fontWeight: 600,
    };
    const styleTime = {
        color: "#8495A8",
    };
    function openDetail() {
        props.handleOnSetSelectedTask(props.task)
        props.handleOnModalOpend("detail")
    }
    return (
        <div style={styleCard}>
            <div onClick={openDetail} style={styleTitle}>
                {props.task.title}
            </div>
            <div style={styleTime}>
                {props.task.time}h
            </div>
        </div>
    )
}
