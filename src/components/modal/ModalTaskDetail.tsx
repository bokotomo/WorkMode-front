import React from 'react'
import Modal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TaskCard } from '../../types/taskBoard';

interface Props {
    isModalOpened: boolean
    handleOnModalOpend: Function
    openedModalName: string
    selectedTask: TaskCard
}
export const ModalTaskDetail: React.FC<Props> = props => {
    const style = {
        background: "#677182",
    };
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: "#192A46",
            color: "white",
            width: "60%",
            border: "none",
            boxShadow: "0px 0px 6px #0000005c",
        }
    };

    function closeModal() {
        props.handleOnModalOpend('');
    }

    return (
        <div style={style}>
            <Modal
                isOpen={props.openedModalName === "detail"}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="モーダル"
            >
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#F0F6FC",
                    fontWeight: 600,
                }}>
                    <div>タスク詳細</div>
                    <FontAwesomeIcon style={{ fontSize: 22, cursor: "pointer" }} onClick={closeModal} icon="times" />
                </div>
                <div>
                    {props.selectedTask.title}
                </div>
                <div>
                    {props.selectedTask.detail}
                </div>
                <div>
                    {props.selectedTask.time}h
                </div>
            </Modal>
        </div>
    )
}