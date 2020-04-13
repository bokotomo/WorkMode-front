import React from 'react'
import Modal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
    handleOnModalOpend: Function
    handleOnCreateUser: Function
    openedModalName: string
}

export const ModalRegisterUser: React.FC<Props> = props => {
    var name = '';
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
            width: '60%',
            border: 'none',
            boxShadow: '0px 0px 6px #0000005c',
        }
    };

    function closeModal() {
        props.handleOnModalOpend('');
    }

    function addTask() {
        if (name === '') {
            alert('全て入力する必要があります。')
            return
        }
        props.handleOnCreateUser(name);
        closeModal();
    }

    function handleChange(e: any) {
        name = e.target.value
    }

    return (
        <Modal
            isOpen={props.openedModalName === 'register'}
            style={customStyles}
            contentLabel='モーダル'
        >
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                color: '#F0F6FC',
                fontWeight: 600,
            }}>
                <div>ゲスト登録</div>
                <FontAwesomeIcon style={{ fontSize: 22, cursor: 'pointer' }} onClick={closeModal} icon='times' />
            </div>
            <div style={{ marginTop: 20 }}>
                <input onChange={handleChange} style={{ color: 'white', fontSize: 18, background: '#2B4D6C', borderRadius: 20, border: 'none', padding: '5px 15px', width: '100%', height: 40, lineHeight: '40px', boxSizing: 'border-box' }} placeholder='ニックネーム' />
            </div>
            <button style={{ marginTop: 20, fontSize: 18, color: 'white', background: 'linear-gradient(125deg, #66B7FF, #0052de)', borderRadius: 50, border: 'none', width: '100%', textAlign: 'center', height: 40, lineHeight: '40px', boxSizing: 'border-box', cursor: 'pointer' }} onClick={addTask}>
                登録する
            </button>
        </Modal>
    )
}