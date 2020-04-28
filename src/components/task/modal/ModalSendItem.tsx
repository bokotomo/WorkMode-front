import React from 'react';
import { style, hover, color } from '@/css/style';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  readonly socket: WebSocket;
  readonly handleOnModalOpend: Function;
  readonly openedModalName: string;
}
export const ModalSendItem: React.FC<Props> = (props) => {
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
    times: style({
      ...hover.icon,
      fontSize: 22,
      cursor: 'pointer',
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

  const closeModal = () => {
    props.handleOnModalOpend('');
  };

  const addTask = () => {
    alert('OK');
  };

  return (
    <Modal
      isOpen={props.openedModalName === 'sendItem'}
      onRequestClose={closeModal}
      style={css.modal}
      overlayClassName="modalOverLayWrapper"
      contentLabel="モーダル"
    >
      <div className={css.titleArea}>
        <div>タスクを追加</div>
        <FontAwesomeIcon
          className={css.times}
          onClick={closeModal}
          icon="times"
        />
      </div>
      <button type="button" className={css.button.ok} onClick={addTask}>
        追加
      </button>
    </Modal>
  );
};
