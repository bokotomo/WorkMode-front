import React from 'react'
import Modal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface OwnProps { }

const style = {
    background: "#677182",
};

type Props = OwnProps
export const ModalAddTask: React.FC<Props> = props => {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div style={style}>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="モーダル"
            >
                <button onClick={closeModal}>
                    <FontAwesomeIcon icon="times" />
                </button>
            </Modal>
        </div>
    )
}