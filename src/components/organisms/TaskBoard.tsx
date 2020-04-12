import React from 'react'
import { TaskCard } from '../../types/taskBoard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TaskArea } from '../molecules/taskArea';

interface Props {
    handleOnModalOpend: Function
    handleOnSetSelectedTask: Function
    handleOnSetTaskTodo: Function
    handleOnSetTaskInProgresses: Function
    handleOnSetTaskDone: Function
    handleOnAddMessage: Function
    todos: TaskCard[],
    inProgresses: TaskCard[],
    dones: TaskCard[],
}
export const TaskBoard: React.FC<Props> = props => {
    const style = {
        background: "#102133",
        flex: "0 1 55%",
        display: "flex",
    };
    const styleLeft = {
        display: "flex",
        width: "100%",
        background: "#25313E",
        flexFlow: "column",
        justifyContent: "space-between",
    };
    const styleTaskAddButton = {
        flex: "0 1 80px",
        background: "linear-gradient(125deg, #66B7FF, #0052de)",
        fontSize: 30,
        fontWeight: 700,
        lineHeight: "80px",
        cursor: "pointer",
        width: "100%",
    };

    function openModal() {
        props.handleOnModalOpend('add')
    }
    return (
        <div style={style}>
            {/* <img src="/images/taskImage.png" /> */}

            <div style={styleLeft}>
                <div style={{
                    display: "flex",
                    color: "#F0F6FC",
                    textAlign: "center",
                    height: 80,
                    lineHeight: "80px",
                    fontSize: 20,
                    fontWeight: 700,
                }}>
                    <div style={{ flex: "0 1 33.3%", background: "#1E2833" }}>やること</div>
                    <div style={{ flex: "0 1 33.4%", background: "#202C3B" }}>実行中</div>
                    <div style={{ flex: "0 1 33.3%", background: "#1E2833" }}>完了したこと</div>
                </div>
                <div style={{ flex: "0 1 100%" }}>
                    <TaskArea
                        handleOnSetTaskTodo={props.handleOnSetTaskTodo}
                        handleOnSetTaskInProgresses={props.handleOnSetTaskInProgresses}
                        handleOnSetTaskDone={props.handleOnSetTaskDone}
                        handleOnModalOpend={props.handleOnModalOpend}
                        handleOnSetSelectedTask={props.handleOnSetSelectedTask}
                        handleOnAddMessage={props.handleOnAddMessage}
                        todos={props.todos}
                        inProgresses={props.inProgresses}
                        dones={props.dones}
                    />
                </div>
                <div style={styleTaskAddButton}>
                    <div onClick={openModal} style={{ textAlign: "center" }}>
                        <FontAwesomeIcon icon="plus" />
                    </div>
                </div>
            </div>
        </div>
    )
}