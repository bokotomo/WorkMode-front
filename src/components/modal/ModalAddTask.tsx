import React from 'react'
import Modal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
    isModalOpened: boolean
    handleOnModalOpend: Function
    handleOnAddTaskTodo: Function
    openedModalName: string
}
export const ModalAddTask: React.FC<Props> = props => {
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
        }
    };

    function closeModal() {
        props.handleOnModalOpend('');
    }

    function addTask() {
        props.handleOnAddTaskTodo({
            title: "タスクの追加",
            detail: "詳細",
            status: "todo",
            time: 3,
            createdAt: new Date("2019/01/01 12:21:00"),
        });
        closeModal();
    }
    return (
        <div style={style}>
            <Modal
                isOpen={props.openedModalName === "add"}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="モーダル"
            >
                <div>タスクを追加</div>
                <button onClick={closeModal}>
                    <FontAwesomeIcon icon="times" />
                </button>
                <div>
                    <input style={{ background: "#2B4D6C", borderRadius: 20, border: "none", padding: 5, }} placeholder="タイトル" />
                </div>
                <div>
                    <textarea style={{ background: "#2B4D6C", borderRadius: 20, border: "none", padding: 5, }} placeholder="詳細を書きます。"></textarea>
                </div>
                <button style={{ textAlign: "center", }} onClick={addTask}>
                    追加
                </button>
            </Modal>
        </div>
    )
}