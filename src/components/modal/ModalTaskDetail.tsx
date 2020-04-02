import React from 'react'
import Modal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
    isModalOpened: boolean
    handleOnModalOpend: Function
    openedModalName: string
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
                    <div>タスクを追加</div>
                    <FontAwesomeIcon style={{ fontSize: 22, cursor: "pointer" }} onClick={closeModal} icon="times" />
                </div>
                詳細
            </Modal>
        </div>
    )
}