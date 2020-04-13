import React from 'react'
import Modal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
    handleOnModalOpend: Function
    openedModalName: string
}
export const ModalDoneTask: React.FC<Props> = props => {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: '#192A46',
            color: 'white',
            border: 'none',
            boxShadow: '0px 0px 6px #0000005c',
        }
    };
    function closeModal() {
        props.handleOnModalOpend('');
    }
    return (
        <Modal
            isOpen={props.openedModalName === 'done'}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel='モーダル'
        >
            <button onClick={closeModal}>
                <FontAwesomeIcon icon='times' />
            </button>
            <div>「railsのAPI作成」を完了しますか？</div>
            <button style={{ textAlign: 'center', }} onClick={closeModal}>
                完了
            </button>
            <button style={{ textAlign: 'center', background: '#4C6276', }} onClick={closeModal}>
                キャンセル
            </button>
        </Modal>
    )
}