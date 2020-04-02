import React from 'react'
import Modal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
    isModalOpened: boolean
    handleOnModalOpend: Function
    handleOnAddTaskTodo: Function
    openedModalName: string
}

// export class TopPage extends React.Component<Props> {
export const ModalAddTask: React.FC<Props> = props => {
    var title = "ok";
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
        }
    };

    function closeModal() {
        props.handleOnModalOpend('');
    }

    function addTask() {
        props.handleOnAddTaskTodo({
            title: title,
            detail: "詳細",
            status: "todo",
            time: 3,
            createdAt: new Date(),
        });
        closeModal();
    }

    function handleChange(e: any) {
        title = e.target.value
        console.log(title)
    }

    return (
        <div style={style}>
            <Modal
                isOpen={props.openedModalName === "add"}
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
                    <div>タスクを追加</div>
                    <FontAwesomeIcon style={{ fontSize: 22, cursor: "pointer" }} onClick={closeModal} icon="times" />
                </div>
                <div style={{ marginTop: 20 }}>
                    <input value={title} onChange={handleChange} style={{ color: "white", background: "#2B4D6C", borderRadius: 20, border: "none", padding: "5px 15px", width: "100%", height: 40, lineHeight: "40px", boxSizing: "border-box" }} placeholder="タイトル" />
                </div>
                <div style={{ marginTop: 20 }}>
                    <textarea style={{ color: "white", background: "#2B4D6C", width: "100%", borderRadius: 10, border: "none", padding: "5px 15px", height: 120, boxSizing: "border-box", }} placeholder="詳細を書きます。"></textarea>
                </div>
                <button style={{ marginTop: 20, color: "white", background: "linear-gradient(125deg, #66B7FF, #0052de)", borderRadius: 50, border: "none", width: "100%", textAlign: "center", height: 40, lineHeight: "40px", boxSizing: "border-box", cursor: "pointer" }} onClick={addTask}>
                    追加
                </button>
            </Modal>
        </div>
    )
}