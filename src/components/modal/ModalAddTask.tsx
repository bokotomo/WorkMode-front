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
                <div>タスクを追加</div>
                <button onClick={closeModal}>
                    <FontAwesomeIcon icon="times" />
                </button>
                <div>
                    {title}
                    <input value={title} onChange={handleChange} style={{ background: "#2B4D6C", borderRadius: 20, border: "none", padding: 5, }} placeholder="タイトル" />
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