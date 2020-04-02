import React from 'react'
import { TaskCard } from '../../types/taskBoard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TackCard } from '../molecules/TackCard';

interface Props {
    handleOnModalOpend: Function
    handleOnSetSelectedTask: Function
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
        flex: "0 1 33.3%",
        background: "#25313E",
        flexFlow: "column",
        justifyContent: "space-between",
    };

    const style1 = {
        background: "#25313E",
        flex: "0 1 33.3%",
    };

    const style2 = {
        background: "#273547",
        flex: "0 1 33.4%",
    };

    const styleTitle = {
        padding: 15,
        background: "#0000005a",
        height: 50,
        lineHeight: "50px",
        fontSize: 20,
        fontWeight: 700,
    };

    const styleTitleLeft = {
        flex: "0 1 50px",
        padding: "15px 0",
        background: "#0000005a",
        lineHeight: "50px",
        fontSize: 20,
        fontWeight: 700,
        width: "100%",
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

    const styleIn = {
        display: "flex",
        // flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center",
        flex: "0 1 100%",
        padding: 20,
    };

    function openModal() {
        props.handleOnModalOpend('add')
    }
    return (
        <div style={style}>
            {/* <img src="/images/taskImage.png" /> */}
            <div style={styleLeft}>
                <div style={styleTitleLeft}>
                    <div style={{ textAlign: "center" }}>やること</div>
                </div>
                <div style={{
                    flex: "0 1 100%",
                    padding: 20,
                    overflowY: "scroll",
                }}>
                    {props.todos.map(card =>
                        <TackCard
                            key={card.id}
                            task={card}
                            handleOnModalOpend={props.handleOnModalOpend}
                            handleOnSetSelectedTask={props.handleOnSetSelectedTask}
                        />
                    )}
                </div>
                <div style={styleTaskAddButton}>
                    <div onClick={openModal} style={{ textAlign: "center" }}>
                        <FontAwesomeIcon icon="plus" />
                    </div>
                </div>
            </div>
            <div style={style2}>
                <div style={styleTitle}>
                    <div style={{ textAlign: "center" }}>実行中</div>
                </div>
                <div style={styleIn}>
                    {props.inProgresses.map(card =>
                        <TackCard
                            key={card.id}
                            task={card}
                            handleOnModalOpend={props.handleOnModalOpend}
                            handleOnSetSelectedTask={props.handleOnSetSelectedTask}
                        />
                    )}
                </div>
            </div>
            <div style={style1}>
                <div style={styleTitle}>
                    <div style={{ textAlign: "center" }}>完了したこと</div>
                </div>
                <div style={{
                    flex: "0 1 100%",
                    padding: 20,
                    overflowY: "scroll",
                }}>
                    {props.dones.map(card =>
                        <TackCard
                            key={card.id}
                            task={card}
                            handleOnModalOpend={props.handleOnModalOpend}
                            handleOnSetSelectedTask={props.handleOnSetSelectedTask}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}