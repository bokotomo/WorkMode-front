import React from 'react'
import Modal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
    isModalOpened: boolean
    handleOnModalOpend: Function
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
        props.handleOnModalOpend(false);
    }
    return (
        <div style={style}>
            <Modal
                isOpen={props.isModalOpened}
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
                <button style={{ textAlign: "center", }} onClick={closeModal}>
                    追加
                </button>
            </Modal>
        </div>
    )
}