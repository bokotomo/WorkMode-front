import React from 'react';
import Modal from 'react-modal';
import { style, hover, color } from '@/css/style';

interface Props {
  readonly socket: WebSocket;
  readonly handleOnModalOpend: Function;
  readonly registerUser: Function;
  readonly openedModalName: string;
}
export const ModalRegisterUser: React.FC<Props> = (props) => {
  const css = {
    modal: {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: '#192A46',
        color: color.white,
        width: '60%',
        border: 'none',
        cursor: 'auto',
        boxShadow: '0px 0px 6px #0000005c',
      },
    },
    titleArea: style({
      display: 'flex',
      justifyContent: 'space-between',
      color: '#F0F6FC',
      fontWeight: 600,
    }),
    inputName: style({
      color: color.white,
      fontSize: 18,
      background: '#2B4D6C',
      borderRadius: 20,
      border: 'none',
      padding: '5px 15px',
      width: '100%',
      height: 40,
      lineHeight: '40px',
      boxSizing: 'border-box',
    }),
    button: {
      ok: style({
        ...hover.button,
        marginTop: 20,
        fontSize: 18,
        color: color.white,
        background: color.buttonOK,
        borderRadius: 50,
        border: 'none',
        width: '100%',
        textAlign: 'center',
        height: 40,
        lineHeight: '40px',
        boxSizing: 'border-box',
        cursor: 'pointer',
      }),
    },
  };

  let name = '';

  function closeModal() {
    props.handleOnModalOpend('');
  }

  function addTask() {
    if (name === '') {
      alert('全て入力する必要があります。');
      return;
    }
    props.registerUser(props.socket, name);
    closeModal();
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    name = e.target.value;
  }

  return (
    <Modal
      isOpen={props.openedModalName === 'register'}
      style={css.modal}
      overlayClassName="modalOverLayWrapper"
      contentLabel="モーダル"
    >
      <div className={css.titleArea}>
        <div>ゲスト登録（一定期間するとログインできなくなります。）</div>
      </div>
      <div style={{ marginTop: 20 }}>
        <input
          onChange={handleChange}
          className={css.inputName}
          placeholder="ニックネーム"
          maxLength={12}
        />
      </div>
      <button type="button" className={css.button.ok} onClick={addTask}>
        登録する
      </button>
    </Modal>
  );
};
